import BottomFooterSection from './BottomFooterSection';
import TopFooterSection from './top-footer-section/TopFooterSection';

const Footer = () => {
  return (
    <section className='pt-16 pb-12'>
      <TopFooterSection />
      <div className='bg-light-black my-10 h-[1px]'></div>
      <BottomFooterSection />
    </section>
  );
};

export default Footer;
