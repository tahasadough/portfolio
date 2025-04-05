import Icon from '@/components/icon/Icon';
import Badge from '@/components/badge/Badge';
import Card from '@/components/ui/card/Card';
import * as motion from 'motion/react-client';

function WhyMe() {
  return (
    <section className='flex flex-col items-center justify-center gap-10 py-24'>
      <Badge>Why me?</Badge>
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
        <Card.WhyMe icon={<Icon.Watch />} title='Efficient Workflow'>
          Streamlined developing process for rapid deliver without compromising
          quality or detail.
        </Card.WhyMe>
        <Card.WhyMe title='Collaborative Process' icon={<Icon.Chat />}>
          I work closely with you, integrating your feedback to create fantastic
          softwares and amazing experiences
        </Card.WhyMe>
        <Card.WhyMe title='Attention to Detail' icon={<Icon.Search />}>
          Meticulous attention to everything, ensuring a polished and cohesive
          final application that impresses.
        </Card.WhyMe>
      </section>
    </section>
  );
}

export default WhyMe;
