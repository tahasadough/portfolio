import { ReactNode } from 'react';
interface NavBarLink {
  href: string;
  name: string;
}

interface FooterLink extends NavBarLink {
  target?: '_blank';
}

interface Project {
  link: string;
  title: string;
  icon: ReactNode;
}

export type { NavBarLink, FooterLink, Project };
