import TopFooterAbout from './TopFooterAbout';
import TopFooterLinks from './TopFooterLinks';

const TopFooterSection = () => {
  return (
    <section className='flex h-[50%] flex-col space-y-6 text-[--gray] md:flex-row md:justify-between md:space-y-0'>
      <TopFooterAbout />
      <TopFooterLinks />
    </section>
  );
};

export default TopFooterSection;
