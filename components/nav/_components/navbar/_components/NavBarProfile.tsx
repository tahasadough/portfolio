import Image from 'next/image';

function NavBarProfile() {
  return (
    <section className='space-x-2'>
      <Image
        src='taha-sadough.webp'
        width={25}
        height={25}
        alt='profile-image'
        className='inline rounded-full object-cover'
      />
      <span className='font-bold'>Taha Sadough</span>
    </section>
  );
}

export default NavBarProfile;
