import Reveal from "../Reveal";
import Constellation from "../Constellation";
import { getDictionary } from "../i18n/dictionaries";
import type { Locale } from "../i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const c = dict.contact_info;
  const telHref = `tel:${c.phone.replace(/[\s]/g, "")}`;

  return (
    <main className="page">
      <div className="grain" aria-hidden="true" />

      {/* ───────────── HERO ───────────── */}
      <header className="hero">
        <Constellation />
        <div className="hero__glow" aria-hidden="true" />
        <div className="shell">
          <p className="eyebrow hero__eyebrow">{dict.eyebrow}</p>

          <h1 className="hero__name">
            <span className="hero__name-line">{dict.firstName}</span>
            <span className="hero__name-line hero__name-line--accent">
              {dict.lastName}
            </span>
          </h1>

          <p className="hero__tagline">{dict.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--solid" href={`mailto:${c.email}`}>
              {dict.cta.email}
            </a>
            <a
              className="btn btn--ghost"
              href={c.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {dict.cta.linkedin}
            </a>
          </div>

          <ul className="hero__meta">
            <li>
              <span className="hero__meta-label">{dict.heroMeta.basedIn}</span>
              {c.location}
            </li>
            <li>
              <span className="hero__meta-label">{dict.heroMeta.email}</span>
              <a href={`mailto:${c.email}`}>{c.email}</a>
            </li>
            <li>
              <span className="hero__meta-label">{dict.heroMeta.phone}</span>
              <a href={telHref}>{c.phone}</a>
            </li>
          </ul>
        </div>
      </header>

      {/* ───────────── KEY SKILLS ───────────── */}
      <section className="stats">
        <div className="shell stats__grid">
          {dict.keySkills.map((skill, i) => (
            <Reveal className="skillset" key={skill.name} delay={i * 90}>
              <span className="skillset__name">{skill.name}</span>
              <span className="skillset__items">{skill.items}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── ABOUT ───────────── */}
      <section className="section" id="about">
        <div className="shell section__head">
          <span className="section__index">01</span>
          <h2 className="section__title">{dict.sections.about}</h2>
        </div>
        <div className="shell">
          <Reveal>
            <p className="about__lead">
              {dict.aboutLead.map((seg, i) =>
                seg.mark ? (
                  <mark key={i}>{seg.text}</mark>
                ) : (
                  <span key={i}>{seg.text}</span>
                )
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────── EXPERIENCE ───────────── */}
      <section className="section" id="experience">
        <div className="shell section__head">
          <span className="section__index">02</span>
          <h2 className="section__title">{dict.sections.experience}</h2>
        </div>
        <div className="shell timeline">
          {dict.experience.map((job, i) => (
            <Reveal className="job" key={`${job.company}-${i}`} delay={i * 60}>
              <div className="job__meta">
                <span className="job__period">{job.period}</span>
                <span className="job__company">{job.company}</span>
              </div>
              <div className="job__body">
                <h3 className="job__role">{job.role}</h3>
                <ul className="job__points">
                  {job.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── CASES ───────────── */}
      <section className="section" id="cases">
        <div className="shell section__head">
          <span className="section__index">03</span>
          <h2 className="section__title">{dict.sections.cases}</h2>
        </div>
        <div className="shell cases">
          {dict.cases.map((study, i) => (
            <Reveal className="case" key={study.title} delay={i * 80}>
              <div className="case__head">
                <h3 className="case__title">{study.title}</h3>
                <p className="case__summary">{study.summary}</p>
                <div className="case__period">
                  <span className="case__period-pill">
                    <span className="case__period-label">
                      {study.periodFromLabel}
                    </span>
                    <span className="case__period-value">
                      {study.periodFromValue}
                    </span>
                  </span>
                  <span className="case__period-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="case__period-pill">
                    <span className="case__period-label">
                      {study.periodToLabel}
                    </span>
                    <span className="case__period-value">
                      {study.periodToValue}
                    </span>
                  </span>
                </div>
              </div>

              <div className="case__highlights">
                {study.highlights.map((hl, j) => (
                  <div className="case-highlight" key={j}>
                    <span className="case-highlight__value">{hl.value}</span>
                    <span className="case-highlight__text">{hl.text}</span>
                  </div>
                ))}
              </div>

              <div className="case__metrics">
                {study.metrics.map((m, j) => (
                  <div className="case-metric" key={j}>
                    <span className="case-metric__label">{m.label}</span>
                    <div className="case-metric__values">
                      <span className="case-metric__before">{m.before}</span>
                      <span
                        className="case-metric__arrow"
                        aria-hidden="true"
                      >
                        →
                      </span>
                      <span className="case-metric__after">{m.after}</span>
                    </div>
                    <span
                      className={`case-metric__delta ${
                        m.positive
                          ? "case-metric__delta--up"
                          : "case-metric__delta--down"
                      }`}
                    >
                      {m.delta}
                    </span>
                  </div>
                ))}
              </div>

              <div className="case__levers">
                <span className="case__levers-kicker">
                  {dict.caseLeversLabel}
                </span>
                <ol className="case-levers__list">
                  {study.levers.map((lever, j) => (
                    <li className="case-lever" key={j}>
                      <span className="case-lever__num">
                        <span>{j + 1}</span>
                      </span>
                      <div className="case-lever__body">
                        <h4 className="case-lever__title">{lever.title}</h4>
                        <p className="case-lever__text">{lever.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="case__stack">{study.stack}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── EDUCATION + LANGUAGES ───────────── */}
      <section className="section" id="details">
        <div className="shell section__head">
          <span className="section__index">04</span>
          <h2 className="section__title">{dict.sections.details}</h2>
        </div>
        <div className="shell details">
          <Reveal className="detail-card">
            <span className="detail-card__kicker">
              {dict.detailKickers.education}
            </span>
            <h3 className="detail-card__title">{dict.education.school}</h3>
            <p className="detail-card__sub">{dict.education.degree}</p>
            <span className="detail-card__period">{dict.education.period}</span>
          </Reveal>
          <Reveal className="detail-card" delay={90}>
            <span className="detail-card__kicker">
              {dict.detailKickers.languages}
            </span>
            <ul className="lang-list">
              {dict.languages.map((language) => (
                <li className="lang" key={language.name}>
                  <span className="lang__name">{language.name}</span>
                  <span className="lang__level">{language.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───────────── TOOLKIT ───────────── */}
      <section className="section" id="toolkit">
        <div className="shell section__head">
          <span className="section__index">05</span>
          <h2 className="section__title">{dict.sections.toolkit}</h2>
        </div>
        <div className="shell toolkit">
          {dict.toolGroups.map((group, i) => (
            <Reveal className="toolgroup" key={group.title} delay={i * 80}>
              <h3 className="toolgroup__title">{group.title}</h3>
              <ul className="toolgroup__list">
                {group.items.map((item) => (
                  <li className="tool" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── CONTACT / FOOTER ───────────── */}
      <footer className="contact" id="contact">
        <div className="contact__glow" aria-hidden="true" />
        <div className="shell">
          <p className="eyebrow">{dict.contact.kicker}</p>
          <h2 className="contact__headline">{dict.contact.headline}</h2>
          <a className="contact__email" href={`mailto:${c.email}`}>
            {c.email}
          </a>

          <div className="contact__links">
            <a href={telHref}>{c.phone}</a>
            <a href={c.linkedin} target="_blank" rel="noreferrer">
              {c.linkedinLabel} ↗
            </a>
            <span>{c.location}</span>
          </div>

          <p className="contact__copyright">{dict.contact.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
