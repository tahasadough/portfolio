'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HeroSectionAnimations } from '@/app/(main)/_components/hero-section/_gsap/hero-section.animation';
import { ScrollTrigger } from 'gsap/all';
import { ReactNode } from 'react';
import { CardAnimations } from '../ui/card/_gsap/card.animation';

interface Props {
  children: ReactNode;
}

gsap.registerPlugin(ScrollTrigger);

function GsapProvider({ children }: Props) {
  useGSAP(() => {
    HeroSectionAnimations();
    CardAnimations();
  }, []);

  return <>{children}</>;
}

export default GsapProvider;
