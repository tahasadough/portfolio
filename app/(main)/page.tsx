import About from './_components/about/About';
import Contact from './_components/contact/Contact';
import HeroSection from './_components/hero-section/HeroSection';
// import Portfolio from './_components/portfolio/Portfolio';
import WhyMe from './_components/why-me/WhyMe';

function HomePage() {
  return (
    <>
      <section className='container'>
        <HeroSection />
        {/* <Portfolio /> */}
        <About />
        <WhyMe />
      </section>
      <Contact />
    </>
  );
}

export default HomePage;
