export type IconKey =
  | "users"
  | "fish"
  | "sprout"
  | "graduation"
  | "heart"
  | "droplets"
  | "shield"
  | "landmark"
  | "messages"
  | "school";

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "youtube" | "linkedin";
}

export interface ContactDetails {
  officeName: string;
  addressLines: string[];
  phone: string;
  email: string;
  hours: string;
  note: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  place: string;
  summary: string;
  navigation: NavItem[];
  contact: ContactDetails;
  social: SocialLink[];
  subCounties: string[];
}

export interface HeroSlide {
  id: string;
  kicker: string;
  quote: string;
  emphasis: string;
  image: string;
  imageAlt: string;
}

export interface Biography {
  introduction: string;
  paragraphs: string[];
  portraitNote: string;
  journey: Array<{
    period: string;
    title: string;
    summary: string;
    points: string[];
  }>;
  values: Array<{
    title: string;
    summary: string;
    icon: IconKey;
  }>;
  milestones: Array<{
    title: string;
    summary: string;
  }>;
}

export interface Priority {
  slug: string;
  title: string;
  summary: string;
  icon: IconKey;
  image: string;
  imageAlt: string;
  intent: string;
  proposals: string[];
  paragraphs: string[];
  placeholder: true;
}

export interface Initiative {
  slug: string;
  title: string;
  summary: string;
  area: string;
  icon: IconKey;
  image: string;
  imageAlt: string;
  status: string;
  steps: string[];
  paragraphs: string[];
  featured: boolean;
  placeholder: true;
}

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  location: string;
  image: string;
  imageAlt: string;
  author: string;
  paragraphs: string[];
  placeholder: true;
}

export interface CalendarEvent {
  slug: string;
  title: string;
  summary: string;
  date: string;
  venue: string;
  town: string;
  category: string;
  image: string;
  imageAlt: string;
  runningOrder: string[];
  paragraphs: string[];
  placeholder: true;
}

export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  title: string;
  caption: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  placeholder: true;
}

export interface SearchRecord {
  type: "Page" | "News" | "Event" | "Priority" | "Initiative";
  title: string;
  href: string;
  excerpt: string;
  keywords: string;
}
