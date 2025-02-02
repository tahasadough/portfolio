import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import HeroSection from '@/components/home/hero-section/HeroSection';
import Portfolio from '@/components/portfolio/Portfolio';
import WhyMe from '@/components/why-me/WhyMe';

const Home = () => {
  return (
    <>
      <section className='container'>
        <HeroSection />
        <Portfolio />
        <About />
        <WhyMe />
      </section>
      <Contact />
    </>
  );
};

export default Home;
