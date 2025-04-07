import gsap from 'gsap';

function CardAnimations() {
  const cards = gsap.utils.toArray('.card');

  cards.forEach((card) => {
    gsap.fromTo(
      card as gsap.TweenTarget,
      { scale: 0.75, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: card as gsap.DOMTarget,
          start: 'top bottom-=15%',
          toggleActions: 'play none none none',
        },
      },
    );
  });
}

export { CardAnimations };
