export type ServiceType = 
  | 'Flyer & Graphic Design'
  | 'Social Media Content & Video Ads'
  | 'Business Website Design';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Video & Social Ads' | 'Business Website';
  serviceType: ServiceType;
  description: string;
  image: string;
  tags: string[];
  isSample: boolean;
  clientName?: string;
  demoUrl?: string;
  videoDuration?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  details?: {
    objective: string;
    deliverables: string[];
    toolsUsed: string[];
  };
}

export interface SkillItem {
  name: string;
  category: 'Design & Visuals' | 'Video & AI' | 'Web & Tech' | 'Productivity & Office';
  level?: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  businessName: string;
  serviceNeeded: ServiceType;
  message: string;
}

export interface ContactConfig {
  emailService: 'formspree' | 'emailjs' | 'custom_backend';
  formspreeEndpoint: string;
  emailjsServiceId: string;
  emailjsTemplateId: string;
  emailjsPublicKey: string;
}
