export interface Service {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string;
  image?: string;
  link?: string;
  summary?: string;
  role?: string;
  tags?: string[];
  featured?: boolean;
  displayed?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon?: string;
} 