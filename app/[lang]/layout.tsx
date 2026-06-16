import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { getDictionary } from "../i18n/dictionaries";
import { locales, type Locale } from "../i18n/config";
import LanguageSwitcher from "../LanguageSwitcher";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin", "cyrillic-ext"],
  display: "swap",
  variable: "--font-body",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-mono",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: {
        en: "/en",
        uk: "/uk",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "profile",
      locale: lang === "uk" ? "uk_UA" : "en_US",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <html lang={lang} data-scroll-behavior="smooth">
      <body
        className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}
      >
        <LanguageSwitcher current={lang as Locale} />
        {children}
      </body>
    </html>
  );
}
