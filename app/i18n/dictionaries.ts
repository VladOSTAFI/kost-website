import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((m) => m.default),
  uk: () => import("./uk").then((m) => m.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  (dictionaries[locale] ?? dictionaries.en)();
