import PilledTitle from '../PilledTitle';
import LatestProjectsSection from './LatestProjectsSection';
import * as motion from 'motion/react-client';

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className='flex flex-col items-center justify-center space-y-8 py-20 md:space-y-[10px] md:px-8 md:py-[100px] lg:space-y-12 lg:pb-[100px] lg:pt-[120px]'
    >
      <PilledTitle center>Portfolio</PilledTitle>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='text-center text-[32px] leading-none text-[--gray] lg:text-5xl'
      >
        My Latest <span className='text-white'>Projects</span>
      </motion.h1>
      <LatestProjectsSection />
    </section>
  );
};

export default Portfolio;
