import Link from 'next/link';
import IconWrapperCard from '@/components/ui/icon-wrapper/IconWrapper';
import { ProjectCardProps, WhyMeCardProps } from './_utils/card.interfaces';

function Card() {
  return;
}

function ProjectCard({ logo, title, href }: ProjectCardProps) {
  return (
    <div className='card'>
      <Link href={href as string} target='_blank'>
        <section className='group relative'>
          <div className='border-light-black bg-almost-black flex h-[300px] w-full transform items-center justify-center overflow-hidden rounded-2xl border shadow-md backdrop-blur-sm backdrop-filter transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-gray-700 hover:shadow-lg'>
            {logo}
          </div>
          <h3 className='py-5 text-[20px]'>{title}</h3>
        </section>
      </Link>
    </div>
  );
}

function WhyMeCard({ icon, title, children }: WhyMeCardProps) {
  return (
    <div className='card'>
      <div className='border-light-black bg-almost-black rounded-2xl border px-8 py-10'>
        <section className='space-y-6'>
          <IconWrapperCard icon={icon} />
          <h3 className='text-xl'>{title}</h3>
          <p className='text-[16px] text-[--gray]'>{children}</p>
        </section>
      </div>
    </div>
  );
}

Card.Project = ProjectCard;
Card.WhyMe = WhyMeCard;

export default Card;
