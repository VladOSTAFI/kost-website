import Reveal from "./Reveal";
import {
  profile,
  stats,
  experience,
  toolGroups,
  education,
  languages,
} from "./data";

export default function Home() {
  return (
    <main className="page">
      <div className="grain" aria-hidden="true" />

      {/* ───────────── HERO ───────────── */}
      <header className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="shell">
          <p className="eyebrow hero__eyebrow">Personal Brand · Digital Marketing</p>

          <h1 className="hero__name">
            <span className="hero__name-line">Kristina</span>
            <span className="hero__name-line hero__name-line--accent">Ostafi</span>
          </h1>

          <p className="hero__role">{profile.role}</p>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--solid" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
            <a
              className="btn btn--ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          <ul className="hero__meta">
            <li>
              <span className="hero__meta-label">Based in</span>
              {profile.location}
            </li>
            <li>
              <span className="hero__meta-label">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="hero__meta-label">Phone</span>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                {profile.phone}
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* ───────────── STATS ───────────── */}
      <section className="stats">
        <div className="shell stats__grid">
          {stats.map((stat, i) => (
            <Reveal className="stat" key={stat.label} delay={i * 90}>
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── ABOUT ───────────── */}
      <section className="section" id="about">
        <div className="shell section__head">
          <span className="section__index">01</span>
          <h2 className="section__title">About</h2>
        </div>
        <div className="shell">
          <Reveal>
            <p className="about__lead">
              I turn marketing complexity into clear, measurable momentum.
              Working across <mark>SEO</mark>, <mark>PPC</mark>, and{" "}
              <mark>Paid Social</mark>, I keep cross-functional teams aligned and
              decisions grounded in data — so growth is intentional, not
              accidental.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────── EXPERIENCE ───────────── */}
      <section className="section" id="experience">
        <div className="shell section__head">
          <span className="section__index">02</span>
          <h2 className="section__title">Experience</h2>
        </div>
        <div className="shell timeline">
          {experience.map((job, i) => (
            <Reveal className="job" key={job.company} delay={i * 60}>
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

      {/* ───────────── TOOLKIT ───────────── */}
      <section className="section" id="toolkit">
        <div className="shell section__head">
          <span className="section__index">03</span>
          <h2 className="section__title">Toolkit</h2>
        </div>
        <div className="shell toolkit">
          {toolGroups.map((group, i) => (
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

      {/* ───────────── EDUCATION + LANGUAGES ───────────── */}
      <section className="section" id="details">
        <div className="shell section__head">
          <span className="section__index">04</span>
          <h2 className="section__title">Education &amp; Languages</h2>
        </div>
        <div className="shell details">
          <Reveal className="detail-card">
            <span className="detail-card__kicker">Education</span>
            <h3 className="detail-card__title">{education.school}</h3>
            <p className="detail-card__sub">{education.degree}</p>
            <span className="detail-card__period">{education.period}</span>
          </Reveal>
          <Reveal className="detail-card" delay={90}>
            <span className="detail-card__kicker">Languages</span>
            <ul className="lang-list">
              {languages.map((lang) => (
                <li className="lang" key={lang.name}>
                  <span className="lang__name">{lang.name}</span>
                  <span className="lang__level">{lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───────────── CONTACT / FOOTER ───────────── */}
      <footer className="contact" id="contact">
        <div className="contact__glow" aria-hidden="true" />
        <div className="shell">
          <p className="eyebrow">Let&apos;s work together</p>
          <h2 className="contact__headline">
            Ready to make your marketing measurable?
          </h2>
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className="contact__links">
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinLabel} ↗
            </a>
            <span>{profile.location}</span>
          </div>

          <p className="contact__copyright">
            © {profile.name}. Built with care.
          </p>
        </div>
      </footer>
    </main>
  );
}
