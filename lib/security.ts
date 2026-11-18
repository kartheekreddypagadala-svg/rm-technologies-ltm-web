/**
 * Small server-side helpers that protect our API routes.
 *
 * isSameOrigin:
 * Blocks forms posted from other websites (CSRF).
 *
 * clientIp:
 * Finds the visitor's IP, used only for rate limiting.
 */

const extraHosts = [
  "rulingmindtech.com",
  "www.rulingmindtech.com"
];

export function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");

  if (!origin) return true;

  let originHost: string;

  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  const allowed = new Set<string>(extraHosts);

  const host = req.headers.get("host");
  const forwarded = req.headers.get("x-forwarded-host");

  if (host) allowed.add(host);
  if (forwarded) allowed.add(forwarded);

  try {
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      allowed.add(
        new URL(process.env.NEXT_PUBLIC_SITE_URL).host
      );
    }
  } catch {
    // Ignore a badly typed environment value.
  }

  return allowed.has(originHost);
}

export function clientIp(req: Request): string {
  return (
    req.headers
      .get("x-forwarded-for")
      ?.split(",")[0]
      ?.trim() || "unknown"
  );
}