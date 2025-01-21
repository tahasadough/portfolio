import { animate, scroll } from 'motion';

export const HeroSectionAnimations = () => {
  const animation = animate('#metalic-flower-wrapper', {
    y: 600,
    rotate: 120,
  });

  scroll(animation);
};
