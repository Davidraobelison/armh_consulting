import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/lib/i18n/routing";

const intlMiddleware = createMiddleware(routing);

const BOT_UA_PATTERNS = [
  /python-requests/i,
  /curl\//i,
  /go-http-client/i,
  /httpx/i,
  /axios/i,
  /java\//i,
  /libwww-perl/i,
  /wget/i,
  /scrapy/i,
  /okhttp/i,
];

function isBotUserAgent(ua: string | null): boolean {
  if (!ua || ua.trim() === "") return true;
  return BOT_UA_PATTERNS.some((pattern) => pattern.test(ua));
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/contact") || pathname.startsWith("/api/partner")) {
    const ua = req.headers.get("user-agent");
    if (isBotUserAgent(ua)) {
      return new NextResponse(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }
    return NextResponse.next();
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/api/contact",
    "/api/partner",
    "/((?!_next|.*\\..*).*)",
  ],
};

