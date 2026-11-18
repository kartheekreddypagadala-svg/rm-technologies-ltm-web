import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { SendEmailCommand } from "@aws-sdk/client-sesv2";

import { ddb, ses } from "@/lib/aws";
import { parseContact } from "@/lib/validate";
import { pushLeadToCrm } from "@/lib/crm";
import { isSameOrigin, clientIp } from "@/lib/security";
import { isRateLimited } from "@/lib/rateLimit";
import { PRIVACY_NOTICE_VERSION } from "@/lib/privacy";

export const runtime = "nodejs";

export async function POST(req: Request) {
  // 1. Check request origin.
  if (!isSameOrigin(req)) {
    return NextResponse.json(
      { error: "Request not allowed." },
      { status: 403 }
    );
  }

  // 2. Check request size.
  if (
    Number(req.headers.get("content-length") ?? 0) >
    20_000
  ) {
    return NextResponse.json(
      { error: "Your message is too large." },
      { status: 413 }
    );
  }

  // 3. Rate limiting.
  if (isRateLimited(`contact:${clientIp(req)}`)) {
    return NextResponse.json(
      {
        error:
          "Too many messages. Please wait a few minutes and try again."
      },
      { status: 429 }
    );
  }

  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  // 4. Validate submitted information and consent.
  const parsed = parseContact(body);

  if (!parsed.ok) {
    return NextResponse.json(
      { error: parsed.error },
      { status: 400 }
    );
  }

  // 5. Honeypot spam check.
  if (parsed.spam) {
    return NextResponse.json({ ok: true });
  }

  const table = process.env.CONTACT_TABLE;

  if (!table) {
    console.error("CONTACT_TABLE is not configured.");

    return NextResponse.json(
      { error: "Contact service is not configured." },
      { status: 500 }
    );
  }

  const {
    name,
    firstName,
    lastName,
    email,
    company,
    jobTitle,
    country,
    service,
    message,
    marketingConsent
  } = parsed.data;

  const id = randomUUID();
  const createdAt = new Date().toISOString();

  // 6. Save enquiry and consent record.
  try {
    await ddb.send(
      new PutCommand({
        TableName: table,
        Item: {
          id,
          createdAt,
          name,
          firstName,
          lastName,
          email,
          company,
          jobTitle,
          country,
          service,
          message,

          dataConsent: true,
          marketingConsent,
          consentAt: createdAt,
          noticeVersion: PRIVACY_NOTICE_VERSION
        }
      })
    );
  } catch (err) {
    console.error("DynamoDB write failed:", err);

    return NextResponse.json(
      {
        error:
          "Could not save your enquiry. Please try again."
      },
      { status: 500 }
    );
  }

  // 7. Synchronize with CRM.
  try {
    await pushLeadToCrm({
      name,
      email,
      company,
      service,
      message,
      marketingConsent
    });
  } catch (err) {
    console.error("CRM sync failed:", err);
  }

  // 8. Send email notification.
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (to && from) {
    try {
      await ses.send(
        new SendEmailCommand({
          FromEmailAddress: from,
          Destination: {
            ToAddresses: [to]
          },
          ReplyToAddresses: [email],
          Content: {
            Simple: {
              Subject: {
                Data:
                  `New enquiry: ${service} ` +
                  `(${name.replace(/[\r\n]+/g, " ")})`
              },
              Body: {
                Text: {
                  Data: `
New RulingMindTech Contact Enquiry

Name: ${name}
First Name: ${firstName || "-"}
Last Name: ${lastName || "-"}
Email: ${email}
Company: ${company || "-"}
Job Title: ${jobTitle || "-"}
Country: ${country || "-"}
Enquiry Type: ${service}
Marketing consent: ${
                    marketingConsent
                      ? "YES"
                      : "NO - do not send marketing"
                  }

Message:
${message}

Enquiry ID: ${id}
Submitted: ${createdAt}
Notice version: ${PRIVACY_NOTICE_VERSION}
                  `.trim()
                }
              }
            }
          }
        })
      );
    } catch (err) {
      console.error("SES email failed:", err);
    }
  }

  return NextResponse.json(
    {
      ok: true,
      id,
      message:
        "Your enquiry has been submitted successfully."
    },
    { status: 201 }
  );
}