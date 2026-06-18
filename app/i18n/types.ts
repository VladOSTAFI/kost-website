export interface SkillSet {
  name: string;
  items: string;
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

export interface CaseHighlight {
  value: string;
  text: string;
}

export interface CaseMetric {
  label: string;
  before: string;
  after: string;
  delta: string;
  positive: boolean; // controls green (true) vs muted-red (false) delta color
}

export interface CaseLever {
  title: string;
  text: string;
}

export interface CaseStudy {
  title: string;
  summary: string;
  periodFromLabel: string;
  periodFromValue: string;
  periodToLabel: string;
  periodToValue: string;
  highlights: CaseHighlight[];
  metrics: CaseMetric[];
  levers: CaseLever[];
  stack: string; // small mono footer line
  pdf: string; // public path to the full case-study PDF
}

export interface Dictionary {
  meta: { title: string; description: string };
  eyebrow: string;
  firstName: string;
  lastName: string;
  fullName: string;
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
  keySkills: SkillSet[];
  sections: {
    about: string;
    experience: string;
    cases: string;
    toolkit: string;
    details: string;
  };
  aboutLead: LeadSegment[];
  experience: ExperienceItem[];
  cases: CaseStudy[];
  caseLeversLabel: string;
  casePdfLabel: string;
  toolGroups: ToolGroup[];
  detailKickers: { education: string; languages: string };
  education: { school: string; degree: string; period: string };
  languages: LangPair[];
  contact: { kicker: string; copyright: string };
  login: {
    eyebrow: string;
    title: string;
    subtitle: string;
    label: string;
    placeholder: string;
    submit: string;
    error: string;
  };
}
