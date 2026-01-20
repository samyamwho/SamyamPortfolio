export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export const NavigationLink = {
  HOME: '/',
  SERVICES: '/services',
  CONTACT: '/contact'
} as const;

export type NavigationLink = typeof NavigationLink[keyof typeof NavigationLink];