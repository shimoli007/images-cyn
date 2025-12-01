// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

// Contact form types
export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  consentData: boolean;
  consentMarketing: boolean;
}

export type InterestOption = {
  value: string;
  label: string;
};

// Card types
export interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
}

export interface TestimonialCard {
  title: string;
  subtitle: string;
  description: string;
  metrics?: { label: string; value: string }[];
  link?: string;
  linkText?: string;
}

// Globe types
export interface GlobeMarker {
  lat: number;
  lng: number;
  label: string;
  color?: string;
}

export interface GlobeConnection {
  start: GlobeMarker;
  end: GlobeMarker;
}

// Page section types
export interface HeroSection {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

// Stats types
export interface Stat {
  value: string;
  label: string;
  description?: string;
}

// Team member types
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

// Blog/Resource types
export interface Resource {
  type: 'whitepaper' | 'guide' | 'report' | 'blog' | 'video' | 'webinar';
  title: string;
  description: string;
  readTime?: string;
  downloadUrl?: string;
  watchUrl?: string;
}

// Success story types
export interface SuccessStory {
  badge: string;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: { label: string; value: string }[];
  link?: string;
}
