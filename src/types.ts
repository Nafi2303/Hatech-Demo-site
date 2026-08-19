export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badge: string;
  features: string[];
  impactMetric: string;
}

export interface SectorItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  caseStudy: string;
  keyModules: string[];
  badge: string;
}

export interface ClientPartner {
  name: string;
  category: string;
  logoText: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  projectType: string;
  avatarUrl: string;
}

export interface StatMetric {
  value: string;
  label: string;
  sublabel: string;
  detail: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  author: string;
}

export interface QuoteFormData {
  service: string;
  organizationType: string;
  timeline: string;
  budgetRange: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  details: string;
}
