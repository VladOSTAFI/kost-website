import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Kristina Ostafi — Digital Marketing Manager",
    description:
      "Digital Marketing Manager with 2+ years managing 12+ concurrent projects across SEO, PPC, and Paid Social for B2B and B2C clients.",
  },
  eyebrow: "Personal Brand · Digital Marketing",
  firstName: "Kristina",
  lastName: "Ostafi",
  fullName: "Kristina Ostafi",
  role: "Digital Marketing Manager",
  tagline:
    "Digital Marketing Manager with 2+ years managing 12+ concurrent projects across SEO, PPC, and Paid Social for B2B and B2C clients. I coordinate cross-functional teams while staying hands-on with campaign strategy and performance optimization.",
  cta: { email: "Get in touch", linkedin: "LinkedIn ↗" },
  heroMeta: { basedIn: "Based in", email: "Email", phone: "Phone" },
  contact_info: {
    location: "Lviv, Ukraine — Remote / Office",
    email: "ovsianyk.kristina@gmail.com",
    phone: "+38 096 582 6250",
    linkedin: "https://www.linkedin.com/in/kristina-ostafi/",
    linkedinLabel: "linkedin.com/in/kristina-ostafi",
  },
  stats: [
    { value: "6+", label: "Years in SEO & marketing" },
    { value: "12+", label: "Concurrent projects led" },
    { value: "10+", label: "Websites scaled in SEO" },
  ],
  sections: {
    about: "About",
    experience: "Experience",
    toolkit: "Toolkit",
    details: "Education & Languages",
  },
  aboutLead: [
    {
      text: "I turn marketing complexity into clear, measurable momentum. Working across ",
    },
    { text: "SEO", mark: true },
    { text: ", " },
    { text: "PPC", mark: true },
    { text: ", and " },
    { text: "Paid Social", mark: true },
    {
      text: ", I keep cross-functional teams aligned and decisions grounded in data — so growth is intentional, not accidental.",
    },
  ],
  experience: [
    {
      role: "Digital Marketing Manager",
      company: "WEDEX",
      period: "2024 — Present",
      points: [
        "Manage 12+ active projects in parallel (SEO, PPC, Paid Social) from launch to scaling, consistently meeting deadlines.",
        "Coordinate cross-functional teams (SEO, PPC, dev, design) — task assignment, prioritization, and quality control.",
        "Analyze Google Ads and SEO metrics, identify trends, and make strategic optimization decisions.",
        "Run monthly team retrospectives: structured analysis of project progress, identifying blockers, and developing solutions.",
        "Own budget management: resource allocation between departments and coordination with accounting.",
      ],
    },
    {
      role: "Digital Marketing Specialist",
      company: "BMW Center Kherson",
      period: "2021 — 2022",
      points: [
        "Optimized Meta Ads campaigns: audience segmentation by interests and Lookalike, placement testing, and A/B testing.",
        "Conducted target audience research — analyzing interests, behavior, and creating segments for ad campaigns.",
        "Managed on-page optimization at the local level, ensuring organic traffic and ranking growth.",
        "Created advertising creatives and managed the content plan for Facebook and Instagram.",
        "Led local reputation management: business profile optimization and Google Maps review management for growth.",
      ],
    },
    {
      role: "SEO Specialist",
      company: "WEZOM, Kherson",
      period: "2018 — 2021",
      points: [
        "Managed 10+ websites in parallel (e-commerce, services), ensuring stable organic traffic and ranking growth.",
        "Performed technical SEO audits with Screaming Frog: indexation, duplicates, redirects, header structure, robots.txt, sitemap, URL, pagination.",
        "Developed on-page optimization strategy: semantic architecture, query clustering by intent, and meta tag optimization.",
        "Built and implemented link-building strategy for websites.",
        "Created and assigned technical tasks to dev and copywriting teams for on-page optimization.",
      ],
    },
  ],
  toolGroups: [
    {
      title: "Analytics & SEO",
      items: [
        "Google Analytics 4",
        "Google Search Console",
        "Looker Studio",
        "Ahrefs",
        "Serpstat",
        "Similarweb",
      ],
    },
    {
      title: "Advertising",
      items: ["Google Ads", "Meta Ads", "Google Keyword Planner"],
    },
    {
      title: "Workflow & AI",
      items: ["Worksection", "Google Sheets", "Claude", "ChatGPT"],
    },
  ],
  detailKickers: { education: "Education", languages: "Languages" },
  education: {
    school: "Kherson National Technical University",
    degree: "Bachelor's degree, Taxation",
    period: "2015 — 2019",
  },
  languages: [
    { name: "Ukrainian", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],
  contact: {
    kicker: "Let's work together",
    headline: "Ready to make your marketing measurable?",
    copyright: "© Kristina Ostafi. Built with care.",
  },
};

export default en;
