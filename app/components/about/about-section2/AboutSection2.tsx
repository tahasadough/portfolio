import AboutSection2Description from './AboutSection2Description';
import AboutSection2Image from './AboutSection2Image';

const AboutSection2 = () => {
  return (
    <section
      id='about'
      className='flex flex-col items-center justify-center md:flex-col-reverse xl:flex-row xl:items-stretch xl:justify-stretch'
    >
      <AboutSection2Image />
      <AboutSection2Description />
    </section>
  );
};

export default AboutSection2;
