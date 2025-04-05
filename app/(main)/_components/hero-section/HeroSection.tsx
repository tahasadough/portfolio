import HeroIntro from './_components/HeroIntro';
import HeroMetalicFlowerSection from './_components/HeroMetalicFlowerSection';

function Hero() {
  return (
    <section className='flex flex-col items-center justify-center space-y-[45px] px-2 pt-36 pb-10 md:space-y-[64px] md:px-8 md:pt-[120px] md:pb-0 lg:space-y-[100px] lg:px-10 lg:pt-[140px]'>
      <HeroIntro />
      <HeroMetalicFlowerSection />
    </section>
  );
}

export default Hero;
