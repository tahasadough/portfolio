'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HeroSectionAnimations } from '@/app/(main)/_components/hero-section/_gsap/hero-section.animation';
import { ScrollTrigger } from 'gsap/all';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function GsapProvider({ children }: Props) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    HeroSectionAnimations();
  }, []);

  return <>{children}</>;
}

export default GsapProvider;
