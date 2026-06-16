"use client";

import { useActionState } from "react";
import { authenticate, type LoginState } from "./actions";
import type { Locale } from "../../i18n/config";
import type { Dictionary } from "../../i18n/types";

const initial: LoginState = { error: false };

export default function LoginForm({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["login"];
}) {
  const action = authenticate.bind(null, lang);
  const [state, formAction, pending] = useActionState(action, initial);

  return (
    <form className="login__form" action={formAction} noValidate>
      <label className="login__label" htmlFor="password">
        {dict.label}
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className={`login__input ${state.error ? "is-error" : ""}`}
        placeholder={dict.placeholder}
        autoComplete="current-password"
        autoFocus
        required
        aria-invalid={state.error || undefined}
        aria-describedby={state.error ? "login-error" : undefined}
      />

      {state.error ? (
        <p id="login-error" className="login__error" role="alert">
          {dict.error}
        </p>
      ) : null}

      <button type="submit" className="login__submit" disabled={pending}>
        {pending ? "…" : dict.submit}
      </button>
    </form>
  );
}
