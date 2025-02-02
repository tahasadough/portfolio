import PilledTitle from '../../PilledTitle';
import Button from '../../Button';
import * as motion from 'motion/react-client';
import Link from 'next/link';

const IntroSection = () => {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='space-y-9'
    >
      <PilledTitle center>Hello,I&apos;m Taha 👋</PilledTitle>
      <h1 className='text-center text-[2rem] leading-none sm:text-[3rem] md:text-[4rem] lg:text-[5rem]'>
        Software Developer{' '}
        <span className='text-[--gray]'>creating scalable applications</span>
      </h1>
      <div className='flex justify-center'>
        <Link
          href='https://github.com/tahasadough'
          target='_blank'
          className='py-2'
        >
          <Button center>Connect me</Button>
        </Link>
      </div>
    </motion.section>
  );
};

export default IntroSection;
