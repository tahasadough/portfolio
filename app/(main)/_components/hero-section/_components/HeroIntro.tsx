import Badge from '@/components/badge/Badge';
import Button from '@/components/ui/button/Button';
import * as motion from 'motion/react-client';
import Link from 'next/link';

function HeroIntro() {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center justify-center gap-9'
    >
      <Badge>Hello,I&apos;m Taha 👋</Badge>
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
          <Button variant='outline'>Connect me</Button>
        </Link>
      </div>
    </motion.section>
  );
}

export default HeroIntro;
