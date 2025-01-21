import BottomFooterSection from './BottomFooterSection';
import TopFooterSection from './top-footer-section/TopFooterSection';

const Footer = () => {
  return (
    <section className='pb-12 pt-16'>
      <TopFooterSection />
      <div className='my-10 h-[1px] bg-[--light-black]'></div>
      <BottomFooterSection />
    </section>
  );
};

export default Footer;
