'use client';
import { useEffect } from 'react';
import { HeroSectionAnimations } from './hero-section-animations';

/**
 * Sometimes i'd rather not to use nextjs default template because i don't want any rerender on route change
 * in this project we have only one route BTW
 *  */

const InitializeMotion = () => {
  useEffect(() => {
    HeroSectionAnimations();
  }, []);

  return <></>;
};

export default InitializeMotion;
