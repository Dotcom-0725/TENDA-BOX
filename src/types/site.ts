export type SiteIconName =
  | "BadgeCheck"
  | "CalendarDays"
  | "Cctv"
  | "House"
  | "MessageCircle"
  | "MonitorSmartphone"
  | "Radio"
  | "ScanLine"
  | "Search"
  | "Settings2"
  | "ShieldCheck"
  | "Tv"
  | "Wrench"
  | "Zap";

export interface BrandProfile {
  name: string;
  tagline: string;
  owner: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  location: string;
  email: string;
  tiktok: string;
  maps: string;
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface Service {
  icon: SiteIconName;
  title: string;
  desc: string;
  items: readonly string[];
  img: string;
}

export interface TrustItem {
  icon: SiteIconName;
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  icon: SiteIconName;
  title: string;
  desc: string;
}

export interface PortfolioItem {
  img: string;
  title: string;
  cat: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface FAQItem {
  q: string;
  a: string;
}