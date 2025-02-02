'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HeroSectionAnimations } from './hero-section-animations';
import { ScrollTrigger } from 'gsap/all';

const InitializeGsap = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    HeroSectionAnimations();
  }, []);

  return <></>;
};

export default InitializeGsap;
