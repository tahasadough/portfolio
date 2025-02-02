import TopFooterAbout from './TopFooterAbout';
import TopFooterLinks from './TopFooterLinks';

const TopFooterSection = () => {
  return (
    <section className='text-gray flex h-[50%] flex-col space-y-6 md:flex-row md:justify-between md:space-y-0'>
      <TopFooterAbout />
      <TopFooterLinks />
    </section>
  );
};

export default TopFooterSection;
