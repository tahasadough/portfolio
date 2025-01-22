import { ReactNode } from 'react';
export interface NavBarLink {
  href: string;
  name: string;
}

export interface FooterLink extends NavBarLink {
  target?: '_blank';
}

export interface Project {
  link: string;
  title: string;
  icon: ReactNode;
}

export interface ScreenSize {
  width: number;
  height: number;
}
