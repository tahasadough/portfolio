// import Image from "next/image";
import { ReactNode } from 'react';
import Link from 'next/link';
import * as motion from 'motion/react-client';

interface Props {
  logo?: ReactNode;
  //   image?: string;
  title?: string;
  href?: string;
}

const ProjectCard = ({ logo, title, href }: Props) => {
  return (
    <Link href={href as string} target='_blank'>
      <motion.section
        initial={{ scale: 0.75, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='group relative'
      >
        <div className='border-light-black bg-almost-black flex h-[300px] w-full items-center justify-center rounded-2xl border transition-all duration-500'>
          {logo}
        </div>
        <h3 className='py-5 text-[20px]'>{title}</h3>
      </motion.section>
    </Link>
  );
};

export default ProjectCard;
