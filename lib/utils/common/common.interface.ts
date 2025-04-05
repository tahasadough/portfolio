import { ReactNode } from 'react';
import { variant, size, color } from './common.type';

interface CvaBaseComponentProps {
  variant?: variant;
  size?: size;
  color?: color;
  className?: string;
  children?: ReactNode;
}

interface ScreenSize {
  width: number;
  height: number;
}

interface Link {
  href: string;
  name: string;
}

export type { CvaBaseComponentProps, ScreenSize, Link };
