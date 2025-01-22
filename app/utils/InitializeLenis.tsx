'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';

const InitializeLenis = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    window.onbeforeunload = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <></>;
};

export default InitializeLenis;
