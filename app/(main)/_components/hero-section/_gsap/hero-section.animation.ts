import gsap from 'gsap';

function HeroSectionAnimations() {
  gsap.to('#metalic-flower-wrapper', {
    scrollTrigger: {
      trigger: '#metalic-flower-wrapper',
      start: '-500px top',
      end: '800px center',
      scrub: 2.5,
    },
    y: 230,
    rotate: 45,
  });
}

export { HeroSectionAnimations };
