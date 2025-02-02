import * as motion from 'motion/react-client';

const AboutSection1 = () => {
  return (
    <motion.p
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='py-20 text-center text-[24px] text-[--gray] md:text-3xl lg:px-52 lg:py-24'
    >
      <span className='text-white'>
        I’m dedicated to crafting applications that are not only efficient but
        also user-friendly.
      </span>
      believe in building solutions that benefit both users and the
      business.Let’s move away from one-dimensional products and collaborate to
      create something exceptional!{' '}
      <span className='text-white'>Let’s make it happen!</span>
    </motion.p>
  );
};

export default AboutSection1;
