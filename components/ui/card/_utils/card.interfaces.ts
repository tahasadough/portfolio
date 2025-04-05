import { ReactNode } from 'react';

interface ProjectCardProps {
  logo?: ReactNode;
  title?: string;
  href?: string;
}

interface WhyMeCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

interface CardProps {
  children: ReactNode;
  className?: string;
}

export type { ProjectCardProps, WhyMeCardProps, CardProps };
