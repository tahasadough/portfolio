import * as motion from 'motion/react-client';

function BottomFooter() {
  return (
    <section className='h-[50%]'>
      <section className='text-gray flex flex-col space-y-5 text-sm md:flex-row md:justify-between md:space-y-0'>
        <p>
          Built by <span className='text-white'>Taha Sadough</span>
        </p>
        <p>
          Inspired by a template by <span className='text-white'>Sebadam</span>
        </p>
      </section>
      <motion.h1
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='to-gray from-light-black bg-gradient-to-tr bg-clip-text text-center text-[50px] text-nowrap text-transparent opacity-0 md:text-[100px] lg:text-[130px] xl:text-[170px] 2xl:text-[185px]'
      >
        Taha Sadough
      </motion.h1>
    </section>
  );
}

export default BottomFooter;
