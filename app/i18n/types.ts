export interface Stat {
  value: string;
  label: string;
}

export interface LeadSegment {
  text: string;
  mark?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface ToolGroup {
  title: string;
  items: string[];
}

export interface LangPair {
  name: string;
  level: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  eyebrow: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  tagline: string;
  cta: { email: string; linkedin: string };
  heroMeta: { basedIn: string; email: string; phone: string };
  contact_info: {
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    linkedinLabel: string;
  };
  stats: Stat[];
  sections: {
    about: string;
    experience: string;
    toolkit: string;
    details: string;
  };
  aboutLead: LeadSegment[];
  experience: ExperienceItem[];
  toolGroups: ToolGroup[];
  detailKickers: { education: string; languages: string };
  education: { school: string; degree: string; period: string };
  languages: LangPair[];
  contact: { kicker: string; headline: string; copyright: string };
}
