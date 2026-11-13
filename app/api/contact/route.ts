
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { SendEmailCommand } from "@aws-sdk/client-sesv2";

import { ddb, ses } from "@/lib/aws";
import { parseContact } from "@/lib/validate";
import { pushLeadToCrm } from "@/lib/crm";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  const parsed = parseContact(body);

  if (!parsed.ok) {
    return NextResponse.json(
      { error: parsed.error },
      { status: 400 }
    );
  }

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
  } = parsed.data;

  const id = randomUUID();
  const createdAt = new Date().toISOString();

  // 1. Save the contact enquiry in DynamoDB.
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
        },
      })
    );
  } catch (err) {
    console.error("DynamoDB write failed:", err);

    return NextResponse.json(
      { error: "Could not save your enquiry. Please try again." },
      { status: 500 }
    );
  }

  // 2. Sync the lead with your CRM.
  try {
    await pushLeadToCrm({
      name,
      email,
      company,
      service,
      message,
    });
  } catch (err) {
    console.error("CRM sync failed:", err);
  }

  // 3. Send an email notification.
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (to && from) {
    try {
      await ses.send(
        new SendEmailCommand({
          FromEmailAddress: from,
          Destination: {
            ToAddresses: [to],
          },
          ReplyToAddresses: [email],
          Content: {
            Simple: {
              Subject: {
                Data: `New enquiry: ${service} (${name.replace(/[\r\n]+/g, " ")})`,
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

Message:
${message}

Enquiry ID: ${id}
Submitted: ${createdAt}
                  `.trim(),
                },
              },
            },
          },
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
      message: "Your enquiry has been submitted successfully.",
    },
    { status: 201 }
  );
}
