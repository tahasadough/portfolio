import Icon from '@/utils/Icon';
import PilledTitle from '../PilledTitle';
import WhyMeCard from './WhyMeCard';
import * as motion from 'motion/react-client';

const WhyMe = () => {
  return (
    <section className='space-y-10 py-24'>
      <PilledTitle center>Why me?</PilledTitle>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='px-2 text-center text-[32px] leading-none lg:px-0 lg:text-5xl'
      >
        I create epic apps that <span className='text-[--gray]'>spark</span>{' '}
        your imagination!
      </motion.h2>
      <section className='grid gap-8 md:grid-cols-3'>
        <WhyMeCard icon={<Icon.watch />} title='Efficient Workflow'>
          Streamlined developing process for rapid deliver without compromising
          quality or detail.
        </WhyMeCard>
        <WhyMeCard title='Collaborative Process' icon={<Icon.chat />}>
          I work closely with you, integrating your feedback to create fantastic
          softwares and amazing experiences
        </WhyMeCard>
        <WhyMeCard title='Attention to Detail' icon={<Icon.search />}>
          Meticulous attention to everything, ensuring a polished and cohesive
          final application that impresses.
        </WhyMeCard>
      </section>
    </section>
  );
};

export default WhyMe;
