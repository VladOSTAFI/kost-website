"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "./i18n/config";

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  function pathFor(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target; // swap the leading locale segment
    const joined = segments.join("/");
    return joined === "" ? `/${target}` : joined;
  }

  return (
    <nav className="langswitch" aria-label="Language">
      {locales.map((l) => (
        <Link
          key={l}
          href={pathFor(l)}
          className={`langswitch__btn ${l === current ? "is-active" : ""}`}
          aria-current={l === current ? "true" : undefined}
          title={localeNames[l]}
          hrefLang={l}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
