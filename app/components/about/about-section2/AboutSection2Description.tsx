import PilledTitle from '../../PilledTitle';
import * as motion from 'motion/react-client';

const AboutSection2Description = () => {
  return (
    <section className='space-y-8 py-20 md:px-24'>
      <div className='flex justify-start md:justify-center'>
        <PilledTitle>About</PilledTitle>
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='text-2xl text-[--gray] md:text-center md:text-4xl lg:text-5xl'
      >
        I am a <span className='text-white'>Software developer</span>
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='text-[16px] text-[--gray]'
      >
        With a background in architecture, I now apply my expertise to product
        design, blending aesthetics, functionality, and innovation. My goal is
        to create modern, user-focused designs that bring your vision to life
      </motion.p>
    </section>
  );
};

export default AboutSection2Description;
