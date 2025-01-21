import IntroSection from './IntroSection';
import MetalicFlowerSection from './MetalicFlowerSection';

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center space-y-[45px] px-2 pb-10 pt-36 md:space-y-[64px] md:px-8 md:pb-0 md:pt-[120px] lg:space-y-[100px] lg:px-10 lg:pt-[140px]'>
      <IntroSection />
      <MetalicFlowerSection />
    </section>
  );
};

export default HeroSection;
