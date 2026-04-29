const ALLOWED_ORIGINS = [
  process.env.APP_URL,
  "https://armh-consulting.com",
  "https://armh-consulting.vercel.app",
  // keep localhost for local dev (APP_URL=http://localhost:3000 covers it)
].flatMap((u) => (u ? [u.replace(/\/$/, "")] : []));

export function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin") ?? req.headers.get("referer") ?? "";
  const normalized = origin.replace(/\/$/, "");
  return ALLOWED_ORIGINS.some((allowed) => normalized.startsWith(allowed));
}
