import Button from '../Button';
import PilledTitle from '../PilledTitle';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';

const Contact = () => {
  return (
    <section
      id='contact'
      className='relative flex flex-col justify-center space-y-7 py-40'
    >
      <PilledTitle center>Contact</PilledTitle>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='text-center text-[32px] lg:text-5xl'
      >
        <span className='text-gray'>Let&apos;s Get </span>in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='text-gray text-center text-[16px]'
      >
        Let&apos;s start ASAP.
      </motion.p>
      <Link href='https://github.com/tahasadough' target='_blank' className=''>
        <Button center>Connect me</Button>
      </Link>
      <div className='absolute inset-0 -z-10 h-full bg-black opacity-85'></div>
      <div className='bg-linear-gradient absolute -top-28 left-0 h-[40%] w-full blur-3xl'></div>
      <div className='bg-linear-gradient absolute bottom-0 left-0 h-[40%] w-full blur-3xl'></div>

      <Image
        src='/metalic-shape-background.png'
        alt='metalic-shape-background'
        width={0}
        height={0}
        className='absolute inset-0 -z-20 size-full object-cover'
      />
    </section>
  );
};

export default Contact;
