import type { NavItem, InterestOption } from '@/types';

export const navigationItems: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'AI & Automation Tools',
        href: '/products/ai-automation',
      },
      {
        label: 'Blockchain Smart Contracts & Traceability',
        href: '/products/blockchain-compliance',
      },
      {
        label: 'Digital Finance',
        href: '/products/digital-finance',
      },
      {
        label: 'Data Analytics & Monetization',
        href: '/products/data-analytics',
      },
    ],
  },
  {
    label: 'AI Training',
    href: '/training',
    children: [
      {
        label: 'Career Growth Programs',
        href: '/training/career-growth',
      },
      {
        label: 'Corporate Training',
        href: '/training/corporate',
      },
      {
        label: 'Public Sector',
        href: '/training/government',
      },
    ],
  },
  {
    label: 'Impact',
    href: '/impact',
    children: [
      {
        label: 'Talent Hub',
        href: '/impact/talent-hub',
      },
      {
        label: 'AI for Good',
        href: '/impact/ai-for-good',
      },
    ],
  },
  {
    label: 'Use Cases',
    href: '/use-cases',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Industry Insights',
    href: '/resources',
  },
];

export const interestOptions: InterestOption[] = [
  { value: 'sme-solutions', label: 'SME Solutions (AI, Blockchain, Finance)' },
  { value: 'career-growth', label: 'Career Growth/AI Upskilling' },
  { value: 'b2b-training', label: 'B2B Training Programs' },
  { value: 'government', label: 'Government Partnerships' },
  { value: 'talent-hub', label: 'Talent Hub' },
  { value: 'careers', label: 'Careers' },
  { value: 'partnership', label: 'Partnership Inquiry' },
  { value: 'other', label: 'Other' },
];

export const footerLinks = {
  products: [
    { label: 'AI & Automation', href: '/products/ai-automation' },
    { label: 'Blockchain & Compliance', href: '/products/blockchain-compliance' },
    { label: 'Digital Finance', href: '/products/digital-finance' },
    { label: 'Data & Analytics', href: '/products/data-analytics' },
  ],
  training: [
    { label: 'Career Growth', href: '/training/career-growth' },
    { label: 'Corporate Training', href: '/training/corporate' },
    { label: 'Public Sector', href: '/training/government' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Talent Hub', href: '/impact/talent-hub' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Industry Insights', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const contactInfo = {
  email: 'irene@cynea.ai',
  phone: '+44 7469 721021',
  address: '5 Merchant Square, London, UK',
  officeHours: {
    weekday: 'Monday - Friday: 9:00 AM - 6:00 PM EAT',
    saturday: 'Saturday: 10:00 AM - 2:00 PM EAT',
    sunday: 'Sunday: Closed',
  },
};

export const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Twitter', href: '#', icon: 'twitter' },
  { label: 'Email', href: 'mailto:irene@cynea.ai', icon: 'mail' },
];
