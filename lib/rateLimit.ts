/**
 * Rate limiter:
 * Stops one visitor from flooding our forms.
 *
 * Memory lives inside one server instance.
 * For heavy traffic use a shared store (Redis / DynamoDB TTL).
 */

const hits = new Map<string, number[]>();

export function isRateLimited(
  key: string,
  limit = 5,
  windowMs = 10 * 60 * 1000
): boolean {
  const now = Date.now();

  const recent = (hits.get(key) ?? []).filter(
    (time) => now - time < windowMs
  );

  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (
        times.every(
          (time) => now - time >= windowMs
        )
      ) {
        hits.delete(k);
      }
    }
  }

  return false;
}