import * as motion from 'motion/react-client';

const BottomFooterSection = () => {
  return (
    <section className='h-[50%]'>
      <section className='flex flex-col space-y-5 text-sm text-[--gray] md:flex-row md:justify-between md:space-y-0'>
        <p>© 2024 Proxio Template</p>
        <section className='flex flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0'>
          <p>
            Built by <span className='text-white'>Taha Sadough</span>
          </p>
          <p>
            Inspired by a template by{' '}
            <span className='text-white'>Sebadam</span>
          </p>
        </section>
      </section>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='text-nowrap bg-linear-gradient-light bg-clip-text text-center text-[50px] text-transparent md:text-[100px] lg:text-[130px] xl:text-[170px] 2xl:text-[185px]'
      >
        Taha Sadough
      </motion.h1>
    </section>
  );
};

export default BottomFooterSection;
