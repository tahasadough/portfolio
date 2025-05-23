import Image from 'next/image';
import * as motion from 'motion/react-client';

export default function AboutImage() {
  return (
    <section className='flex sm:w-[70%] md:w-[60%] xl:w-[90%]'>
      <motion.div
        initial={{ scale: 0.75 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='border-light-black relative size-full rounded-2xl border p-8 opacity-0'
      >
        <Image
          src='/noise.webp'
          alt='noise'
          width={100}
          height={0}
          className='absolute inset-0 -z-50 size-full rounded-2xl object-cover opacity-10'
        />
        <div className='absolute inset-0 size-full bg-black opacity-20 shadow-2xl blur-3xl'></div>
        <Image
          sizes='calc(min(max((min(max(100vw - 80px, 1px), 1120px) - 32px) / 2, 1px), 480px) - 48px)'
          src='/taha-sadough-removed-background.webp'
          alt='me'
          width={0}
          height={0}
          unoptimized
          className='z-50 size-full object-cover object-center'
        />
      </motion.div>
    </section>
  );
}
