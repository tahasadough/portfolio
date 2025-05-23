import BottomFooter from './_components/bottom-footer/BottomFooter';
import TopFooterSection from './_components/top-footer/TopFooterSection';

export default function Footer() {
  return (
    <section className='pt-16 pb-12'>
      <TopFooterSection />
      <div className='bg-light-black my-10 h-[1px]'></div>
      <BottomFooter />
    </section>
  );
}
