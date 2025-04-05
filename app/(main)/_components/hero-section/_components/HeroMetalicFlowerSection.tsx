'use client';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

function HeroMetalicFlowerSection() {
  const wrapperRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'end start'],
  });

  const yValue = useTransform(scrollYProgress, [0, 1], [-150, 270]);
  const rotateValue = useTransform(scrollYProgress, [0, 1], [-25, 60]);

  const springY = useSpring(yValue, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  });

  const springRotate = useSpring(rotateValue, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  });

  return (
    <section className='relative -z-50 shadow-2xl' ref={wrapperRef}>
      <div>
        <motion.section
          style={{
            y: springY,
            rotate: springRotate,
            scale: 1,
            opacity: 1,
          }}
        >
          <Image
            decoding='async'
            width={500}
            height={500}
            sizes='500'
            src='/metalic-flower.png'
            alt='Grey-metallic-flower-shaped-object'
            className='object-cover'
          ></Image>
          <div className='absolute top-0 -z-50 w-full rounded-full bg-white py-64 opacity-10 blur-3xl'></div>
        </motion.section>
      </div>
      <div className='from-almost-black absolute top-[40%] z-50 h-[400px] w-full bg-gradient-to-tr to-black opacity-75 blur-3xl'></div>
      <div className='from-almost-black absolute top-[80%] z-50 h-[400px] w-full bg-gradient-to-tr to-black blur-3xl'></div>
    </section>
  );
}

export default HeroMetalicFlowerSection;
