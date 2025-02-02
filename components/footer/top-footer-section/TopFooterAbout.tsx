import Image from 'next/image';

const TopFooterAbout = () => {
  return (
    <section className='space-y-3'>
      <section className='space-x-2'>
        <Image
          src='taha-sadough.webp'
          width={25}
          height={25}
          alt='profile-image'
          className='inline rounded-full object-cover'
        />
        <span className='text-white'>Taha Sadough</span>
      </section>
      <p className='w-[60%] text-sm'>
        Software developer creating scalable applications
      </p>
      <p>tahasadoughdev@gmail.com</p>
    </section>
  );
};

export default TopFooterAbout;
