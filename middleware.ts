import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./app/i18n/config";

function negotiateLocale(request: NextRequest): string {
  const accept = (request.headers.get("accept-language") || "").toLowerCase();
  const matched = locales.find((l) => accept.includes(l));
  return matched ?? defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  const locale = negotiateLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any path with a file extension (icon.svg, etc.)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
