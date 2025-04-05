import * as motion from 'motion/react-client';
import Link from 'next/link';
import IconWrapperCard from '@/components/ui/icon-wrapper/IconWrapper';
import { ProjectCardProps, WhyMeCardProps } from './_utils/card.interfaces';

function ProjectCard({ logo, title, href }: ProjectCardProps) {
  return (
    <Link href={href as string} target='_blank'>
      <motion.section
        initial={{ scale: 0.75, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='group relative'
      >
        <div className='border-light-black bg-almost-black flex h-[300px] w-full transform items-center justify-center overflow-hidden rounded-2xl border shadow-md backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-gray-700 hover:shadow-lg'>
          {logo}
        </div>
        <h3 className='py-5 text-[20px]'>{title}</h3>
      </motion.section>
    </Link>
  );
}

function WhyMeCard({ icon, title, children }: WhyMeCardProps) {
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
}

function Card() {
  return;
}

Card.Project = ProjectCard;
Card.WhyMe = WhyMeCard;

export default Card;
