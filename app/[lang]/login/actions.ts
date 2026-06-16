"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  AUTH_COOKIE,
  AUTH_TOKEN,
  AUTH_MAX_AGE,
  SITE_PASSWORD,
} from "../../auth";
import { locales, defaultLocale, type Locale } from "../../i18n/config";

export type LoginState = { error: boolean };

export async function authenticate(
  lang: Locale,
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");

  if (password !== SITE_PASSWORD) {
    return { error: true };
  }

  const store = await cookies();
  store.set(AUTH_COOKIE, AUTH_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_MAX_AGE,
    secure: process.env.NODE_ENV === "production",
  });

  const target = locales.includes(lang) ? lang : defaultLocale;
  redirect(`/${target}`);
}
