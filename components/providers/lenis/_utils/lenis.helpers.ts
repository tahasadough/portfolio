import Lenis from 'lenis';
import { LenisOptions } from 'lenis';

function InitializeLenis(options: LenisOptions) {
  const lenis = new Lenis(options);

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  return lenis;
}

export { InitializeLenis };
