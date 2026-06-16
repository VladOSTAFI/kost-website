import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./app/i18n/config";
import { AUTH_COOKIE, AUTH_TOKEN } from "./app/auth";

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

  // Ensure every path carries a locale prefix first.
  if (!hasLocale) {
    const locale = negotiateLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  const locale = pathname.split("/")[1];
  const isLogin = pathname === `/${locale}/login`;
  const authed = request.cookies.get(AUTH_COOKIE)?.value === AUTH_TOKEN;

  // Gate everything behind the password.
  if (!authed && !isLogin) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/login`;
    return NextResponse.redirect(url);
  }

  // Already authenticated — keep them out of the login page.
  if (authed && isLogin) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  return;
}

export const config = {
  // Skip Next internals and any path with a file extension (icon.svg, etc.)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
