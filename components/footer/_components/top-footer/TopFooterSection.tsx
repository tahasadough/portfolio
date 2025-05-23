import TopFooterAbout from './TopFooterAbout';
import TopFooterLinks from './TopFooterLinks';

export default function TopFooterSection() {
  return (
    <section className='flex h-[50%] flex-col space-y-6 md:flex-row md:justify-between md:space-y-0'>
      <TopFooterAbout />
      <TopFooterLinks />
    </section>
  );
}
