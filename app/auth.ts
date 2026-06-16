// Shared auth constants. The password is hardcoded on the server and never
// shipped to the client — only this opaque token is stored in the cookie.
export const AUTH_COOKIE = "kost_session";
export const AUTH_TOKEN = "granted-kostview";
export const SITE_PASSWORD = "kostview";
export const AUTH_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
