export const profile = {
  name: "Kristina Ostafi",
  role: "Digital Marketing Manager",
  tagline:
    "Digital Marketing Manager with 2+ years managing 12+ concurrent projects across SEO, PPC, and Paid Social for B2B and B2C clients. I coordinate cross-functional teams while staying hands-on with campaign strategy and performance optimization.",
  location: "Lviv, Ukraine — Remote / Office",
  email: "ovsianyk.kristina@gmail.com",
  phone: "+38 096 582 6250",
  linkedin: "https://www.linkedin.com/in/kristina-ostafi/",
  linkedinLabel: "linkedin.com/in/kristina-ostafi",
};

export const stats = [
  { value: "2+", label: "Years managing marketing" },
  { value: "12+", label: "Concurrent projects led" },
  { value: "10+", label: "Websites scaled in SEO" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
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
];

export const toolGroups = [
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
];

export const education = {
  school: "Kherson National Technical University",
  degree: "Bachelor's degree, Taxation",
  period: "2015 — 2019",
};

export const languages = [
  { name: "Ukrainian", level: "Native" },
  { name: "English", level: "Intermediate" },
];
