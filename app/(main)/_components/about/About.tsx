import AboutDescription from './_components/AboutDescription';
import AboutImage from './_components/AboutImage';

function About() {
  return (
    <section
      id='about'
      className='flex flex-col items-center justify-center md:flex-col-reverse xl:flex-row xl:items-stretch xl:justify-stretch'
    >
      <AboutImage />
      <AboutDescription />
    </section>
  );
}

export default About;
