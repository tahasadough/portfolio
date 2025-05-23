import Button from '@/components/ui/button/Button';
import Badge from '@/components/badge/Badge';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';

export default function Contact() {
  return (
    <section
      id='contact'
      className='relative flex flex-col items-center justify-center gap-7 py-45'
    >
      <Badge>Contact</Badge>
      <motion.h2
        initial={{ y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='text-center text-[32px] opacity-0 lg:text-5xl'
      >
        <span className='text-gray'>Let&apos;s Get </span>in Touch
      </motion.h2>
      <motion.p
        initial={{ y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='text-gray text-center text-[16px] opacity-0'
      >
        Let&apos;s start ASAP.
      </motion.p>
      <Link
        href='https://github.com/tahasadough'
        target='_blank'
        className='z-50'
      >
        <Button variant='outline'>Connect me</Button>
      </Link>
      <div className='absolute inset-0 -z-10 h-full bg-black opacity-90'></div>
      <div className='from-almost-black absolute -top-20 left-0 h-[40%] w-full bg-gradient-to-br to-black blur-3xl'></div>
      <div className='from-almost-black absolute top-98 bottom-0 left-0 h-[40%] w-full bg-gradient-to-br to-black blur-3xl'></div>

      <Image
        src='/metalic-shape-background.webp'
        alt='metalic-shape-background'
        width={0}
        height={0}
        unoptimized
        className='absolute inset-0 -z-20 size-full object-cover'
      />
    </section>
  );
}
