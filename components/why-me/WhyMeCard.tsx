import { ReactNode } from 'react';
import IconWrapperCard from './IconWrapperCard';
import * as motion from 'motion/react-client';

interface Props {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const WhyMeCard = ({ icon, title, children }: Props) => {
  return (
    <motion.div
      initial={{ scale: 0.75, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='border-light-black bg-almost-black rounded-2xl border px-8 py-10'
    >
      <section className='space-y-6'>
        <IconWrapperCard icon={icon} />
        <h3 className='text-xl'>{title}</h3>
        <p className='text-[16px] text-[--gray]'>{children}</p>
      </section>
    </motion.div>
  );
};

export default WhyMeCard;
