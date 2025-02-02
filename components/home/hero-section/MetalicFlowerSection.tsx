import Image from 'next/image';
import * as motion from 'motion/react-client';

const MetalicFlowerSection = () => {
  return (
    <section className='relative -z-50 shadow-2xl'>
      <div id='metalic-flower-wrapper'>
        <motion.section
          initial={{ rotate: -65, y: 30, scale: 0.75, opacity: 0 }}
          animate={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
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
          <div className='absolute top-0 -z-50 w-full rounded-full bg-white py-64 opacity-[0.1] blur-3xl'></div>
        </motion.section>
      </div>
      <div className='absolute top-[40%] z-50 h-[400px] w-full bg-black opacity-55 blur-3xl'></div>
      <div className='absolute top-[80%] z-50 h-[400px] w-full bg-black blur-3xl'></div>
    </section>
  );
};

export default MetalicFlowerSection;
