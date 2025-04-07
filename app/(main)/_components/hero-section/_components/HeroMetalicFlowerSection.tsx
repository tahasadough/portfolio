import Image from 'next/image';

function HeroMetalicFlowerSection() {
  return (
    <section className='relative -z-50 shadow-2xl'>
      <section id='metalic-flower-wrapper'>
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
      </section>
      <div className='from-almost-black absolute top-[40%] z-50 h-[400px] w-full bg-gradient-to-tr to-black opacity-75 blur-3xl'></div>
      <div className='from-almost-black absolute top-[80%] z-50 h-[400px] w-full bg-gradient-to-tr to-black blur-3xl'></div>
    </section>
  );
}

export default HeroMetalicFlowerSection;
