import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddb } from "@/lib/aws";
import { isSameOrigin, clientIp } from "@/lib/security";
import { isRateLimited } from "@/lib/rateLimit";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!isSameOrigin(req)) {
    return NextResponse.json(
      { error: "Request not allowed." },
      { status: 403 }
    );
  }

  if (isRateLimited(`consent:${clientIp(req)}`, 30)) {
    return NextResponse.json(
      { error: "Too many requests." },
      { status: 429 }
    );
  }

  let b: any;

  try {
    b = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  const c = b?.choices;

  const valid =
    typeof b?.id === "string" &&
    b.id.length <= 64 &&
    typeof b?.ts === "string" &&
    !Number.isNaN(Date.parse(b.ts)) &&
    Number.isInteger(b?.v) &&
    ["accept_all", "reject_all", "custom"].includes(b?.method) &&
    c &&
    typeof c.functional === "boolean" &&
    typeof c.analytics === "boolean" &&
    typeof c.marketing === "boolean";

  if (!valid) {
    return NextResponse.json(
      { error: "Invalid consent record." },
      { status: 400 }
    );
  }

  const table = process.env.CONSENT_TABLE;

  if (!table) {
    return new NextResponse(null, { status: 204 });
  }

  try {
    await ddb.send(
      new PutCommand({
        TableName: table,
        Item: {
          id: b.id,
          ts: b.ts,
          version: b.v,
          method: b.method,
          functional: c.functional,
          analytics: c.analytics,
          marketing: c.marketing,
          userAgent: (
            req.headers.get("user-agent") ?? ""
          ).slice(0, 200)
        }
      })
    );
  } catch (err) {
    console.error("Consent log write failed:", err);
  }

  return new NextResponse(null, { status: 204 });
}