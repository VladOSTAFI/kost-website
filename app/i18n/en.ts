import type {Dictionary} from "./types";

const en: Dictionary = {
  meta: {
    title: "Kristina Ostafi — Digital Marketing Manager",
    description:
      "Digital Marketing Manager with 2+ years managing 12+ concurrent projects across SEO, PPC, and Paid Social for B2B and B2C clients.",
  },
  eyebrow: "Digital Marketing Manager",
  firstName: "Kristina",
  lastName: "Ostafi",
  fullName: "Kristina Ostafi",
  tagline:
    "Digital Marketing Manager with 2+ years managing 12+ concurrent projects across SEO, PPC, and Paid Social for B2B and B2C clients. I coordinate cross-functional teams while staying hands-on with campaign strategy and performance optimization.",
  cta: {email: "Get in touch", linkedin: "LinkedIn ↗"},
  heroMeta: {basedIn: "Based in", email: "Email", phone: "Phone"},
  contact_info: {
    location: "Lviv, Ukraine — Remote / Office",
    email: "ovsianyk.kristina@gmail.com",
    phone: "+38 096 582 6250",
    linkedin: "https://www.linkedin.com/in/kristina-ostafi/",
    linkedinLabel: "linkedin.com/in/kristina-ostafi",
  },
  keySkills: [
    {name: "SEO", items: "Technical · On-page · Off-page · Semantics"},
    {name: "PPC", items: "Google Ads · Shopping · Performance Max"},
    {name: "Paid Social", items: "Meta Ads · Audiences · A/B Testing"},
    {name: "Analytics", items: "GA4 · GSC · Looker Studio · Ahrefs"},
  ],
  sections: {
    about: "About",
    experience: "Experience",
    cases: "Cases",
    toolkit: "Toolkit",
    details: "Education & Languages",
  },
  aboutLead: [
    {
      text: "I turn marketing complexity into clear, measurable momentum. Working across ",
    },
    {text: "SEO", mark: true},
    {text: ", "},
    {text: "PPC", mark: true},
    {text: ", and "},
    {text: "Paid Social", mark: true},
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
  cases: [
    {
      title: "Scaling a US-market cosmetics & pharmacy brand",
      summary:
        "Comparing the first vs. the latest reporting period — conversions and revenue nearly tripled while buyer acquisition cost fell.",
      periodFromLabel: "First period",
      periodFromValue: "17 Oct – 16 Nov 2025",
      periodToLabel: "Latest period",
      periodToValue: "18 May – 16 Jun 2026",
      highlights: [
        {value: "×2.8", text: "Growth in conversions (98 → 274)"},
        {value: "×2.8", text: "Growth in conversion value ($3,424 → $9,757)"},
        {value: "−27%", text: "Lower buyer acquisition cost at scale"},
        {value: "×3.1", text: "Growth in micro-conversions (add_to_cart 519 → 1,613)"},
      ],
      metrics: [
        {label: "Conversions (sales)", before: "97.97", after: "273.72", delta: "+179%", positive: true},
        {label: "Conversion value", before: "$3,424", after: "$9,757", delta: "+185%", positive: true},
        {label: "ROAS", before: "3.16", after: "3.48", delta: "+10%", positive: true},
        {label: "Cost / conv.", before: "$11.06", after: "$10.25", delta: "−7%", positive: true},
        {label: "Clicks", before: "2,911", after: "7,947", delta: "+173%", positive: true},
        {label: "Impressions", before: "178,550", after: "333,832", delta: "+87%", positive: true},
        {label: "CTR", before: "1.63%", after: "2.38%", delta: "+0.75pp", positive: true},
        {label: "Spend", before: "$1,084", after: "$2,806", delta: "+159%", positive: false},
        {label: "Add to cart", before: "519", after: "1,613", delta: "+211%", positive: true},
        {label: "Begin checkout", before: "803", after: "2,269", delta: "+183%", positive: true},
      ],
      levers: [
        {
          title: "Expanded campaign structure",
          text: "Segmented campaigns by direction (health, beauty, pharmacy, sauna), language (en/ru) and audience — enabling precise budget and bid control at the level of each segment."
        },
        {
          title: "Feeds with substituted IDs",
          text: "Created and configured new feeds with substituted IDs to launch separate campaigns with a higher ROAS strategy (up to 600%), driving better traffic quality and lower conversion cost."
        },
        {
          title: "Testing additional signals",
          text: "Systematic testing of audience signals in Performance Max campaigns accelerated algorithm learning and increased placement relevance."
        },
        {
          title: "Working with search themes",
          text: "Analysis and cleanup of search terms, plus DSA campaigns with a 1 product = 1 ad group structure — raising CTR and cutting off non-target traffic."
        },
      ],
      stack: "Performance Max · Google Shopping · Display ads · Search Ads",
    },
    {
      title: "Premium branded menswear — organic growth from zero",
      summary: "Building organic visibility from scratch: September 2025 → June 2026.",
      periodFromLabel: "Start",
      periodFromValue: "September 2025",
      periodToLabel: "Current",
      periodToValue: "May 2026",
      highlights: [
        {value: "+291%", text: "Search impressions (12.9K → 50.5K)"},
        {value: "+105%", text: "Organic clicks (895 → 1,838)"},
        {value: "928", text: "Keywords ranked, from zero"},
        {value: "+66%", text: "Key conversion events (248 → 413)"},
      ],
      metrics: [
        {label: "Clicks · GSC", before: "895", after: "1,838", delta: "+105%", positive: true},
        {label: "Impressions · GSC", before: "12,921", after: "50,547", delta: "+291%", positive: true},
        {label: "Organic sessions · GA4", before: "1,916", after: "2,039", delta: "+6%", positive: true},
        {label: "Engaged sessions · GA4", before: "1,296", after: "1,387", delta: "+7%", positive: true},
        {label: "Key events · GA4", before: "248", after: "413", delta: "+66%", positive: true},
        {label: "Keywords · Serpstat", before: "~0", after: "928", delta: "from zero", positive: true},
        {label: "Visibility · Serpstat", before: "~0", after: "0.05+", delta: "from zero", positive: true},
        {label: "Backlinks · Serpstat", before: "~26", after: "49", delta: "+88%", positive: true},
        {label: "Donor domains · Serpstat", before: "0", after: "24", delta: "+24", positive: true},
      ],
      levers: [
        {
          title: "Expanded site structure & landing pages",
          text: "New category and landing pages built around target clusters — capturing a wider pool of search queries and entering the index for new segments."
        },
        {
          title: "Expanded semantic clusters",
          text: "Deep semantic clustering covering brand, category and product-attribute queries — growing from ~0 to 928 ranked keywords."
        },
        {
          title: "On-page optimization",
          text: "Optimized meta tags, headings, internal linking and content structure on existing and new pages — improving relevance and behavioral signals."
        },
        {
          title: "Technical SEO audit",
          text: "Full technical audit: indexation, load speed, URL structure, duplicate pages and metadata correctness — issues resolved before the core work began."
        },
        {
          title: "Off-page optimization (link building)",
          text: "Grew the backlink profile: +23 new backlinks (+88%) across 24 unique domains — strengthening domain authority and accelerating visibility growth."
        },
      ],
      stack: "On-page & Off-page · B2C",
    },
    {
      title: "B2B crushed stone & sand extraction — organic growth",
      summary: "Organic growth for a B2B materials supplier: May 2025 → May 2026.",
      periodFromLabel: "Start",
      periodFromValue: "May 2025",
      periodToLabel: "Current",
      periodToValue: "May 2026",
      highlights: [
        {value: "+548%", text: "Search impressions (5.3K → 34.6K)"},
        {value: "+158%", text: "Organic clicks (560 → 1,446)"},
        {value: "589", text: "Keywords ranked, from zero"},
        {value: "−1.3", text: "Average position improved (9.4 → 8.1)"},
      ],
      metrics: [
        {label: "Clicks · GSC", before: "560", after: "1,446", delta: "+158%", positive: true},
        {label: "Impressions · GSC", before: "5,340", after: "34,617", delta: "+548%", positive: true},
        {label: "Avg. position · GSC", before: "9.4", after: "8.1", delta: "improved", positive: true},
        {label: "Clicks, 6 mo · GSC", before: "4,210", after: "7,040", delta: "+67%", positive: true},
        {label: "Impressions, 6 mo · GSC", before: "77,700", after: "168,000", delta: "+116%", positive: true},
        {label: "Keywords · Serpstat", before: "~0", after: "589", delta: "from zero", positive: true},
        {label: "Visibility · Serpstat", before: "~0", after: "0.075", delta: "from zero", positive: true},
        {label: "Backlinks · Serpstat", before: "0", after: "191", delta: "+191", positive: true},
        {label: "Donor domains · Serpstat", before: "0", after: "36", delta: "+36", positive: true},
      ],
      levers: [
        {
          title: "Technical SEO audit",
          text: "Technical audit at the start: indexation, speed, URL structure, duplicates and metadata correctness — issues fixed before core work began."
        },
        {
          title: "Expanded site structure & landing pages",
          text: "New category and landing pages for B2B queries — crushed stone, sand, fractions and regions — capturing a wider pool of commercial queries."
        },
        {
          title: "Expanded semantic clusters",
          text: "Clustering for B2B intent: wholesale supply, material specs and regional queries — growing from ~0 to 589 ranked keywords."
        },
        {
          title: "On-page optimization",
          text: "Optimized meta tags, headings, internal linking and content structure — improving relevance for commercial and informational queries."
        },
        {
          title: "Off-page optimization (link building)",
          text: "Built a backlink profile from zero: 191 backlinks across 36 donor domains — strengthening authority and ensuring steady visibility growth."
        },
      ],
      stack: "SEO · On-page & Off-page · B2B",
    },
  ],
  caseLeversLabel: "How it was achieved",
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
  detailKickers: {education: "Education", languages: "Languages"},
  education: {
    school: "Kherson National Technical University",
    degree: "Bachelor's degree, Taxation",
    period: "2015 — 2019",
  },
  languages: [
    {name: "Ukrainian", level: "Native"},
    {name: "English", level: "Intermediate"},
  ],
  contact: {
    kicker: "Let's work together",
    headline: "Ready to make your marketing measurable?",
    copyright: "© Kristina Ostafi. Built with care.",
  },
  login: {
    eyebrow: "Private preview",
    title: "Enter the password",
    subtitle: "This page is protected. Enter the password to continue.",
    label: "Password",
    placeholder: "Your password",
    submit: "Unlock",
    error: "Incorrect password. Please try again.",
  },
};

export default en;
