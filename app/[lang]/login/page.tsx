import { notFound } from "next/navigation";
import { getDictionary } from "../../i18n/dictionaries";
import { locales, type Locale } from "../../i18n/config";
import Constellation from "../../Constellation";
import LoginForm from "./LoginForm";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return (
    <main className="login">
      <div className="login__bg" aria-hidden="true">
        <Constellation />
      </div>

      <section className="login__card">
        <p className="login__eyebrow">{dict.login.eyebrow}</p>
        <h1 className="login__title">{dict.login.title}</h1>
        <p className="login__subtitle">{dict.login.subtitle}</p>
        <LoginForm lang={lang as Locale} dict={dict.login} />
      </section>
    </main>
  );
}
