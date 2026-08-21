export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  iconName: string;
  gradient: string;
  metrics: string;
}

export interface MetricCard {
  id: string;
  metric: string;
  label: string;
  sublabel: string;
  type: 'line' | 'bar' | 'circular' | 'sparkline';
  growth: string;
  period: string;
}

export interface CaseStudy {
  id: string;
  brand: string;
  industry: string;
  category?: 'luxury' | 'realestate' | 'gym' | 'hospitality' | 'fashion' | string;
  title: string;
  tagline: string;
  metricHighlight: string;
  metricLabel: string;
  aspectRatio?: string;
  image: string;
  fallbackGradient: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  technologies: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  phase: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  location?: string;
  category?: 'luxury' | 'realestate' | 'gym' | 'hospitality' | 'all';
  avatar: string;
  rating: number;
  highlightMetric: string;
  verified?: boolean;
  date?: string;
  projectScope?: string;
}

export interface ClientFeedbackSubmission {
  name: string;
  company: string;
  role: string;
  city: string;
  category: string;
  rating: number;
  highlightMetric: string;
  review: string;
  projectScope: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProjectInquiryData {
  name: string;
  email: string;
  company: string;
  budget: string;
  services: string[];
  timeline: string;
  message: string;
}
