import { Project } from '@/app/Interfaces';
import ProjectCard from './ProjectCard';
import Icon from '@/utils/Icon';

const LatestProjectsSection = () => {
  const projects: Project[] = [
    {
      title: 'MouseTrail',
      link: 'https://github.com/tahasadough/mousetrail',
      icon: <Icon.mouseTrail />,
    },
    {
      title: 'Whisper',
      link: 'https://github.com/tahasadough/whisper',
      icon: <Icon.whisper />,
    },
    {
      title: 'Portfolio',
      link: 'https://github.com/tahasadough/portfolio',
      icon: <Icon.t />,
    },
    {
      title: 'MoreDs',
      link: 'https://github.com/tahasadough/moreds',
      icon: '',
    },
  ];
  return (
    <section className='grid w-full gap-8 sm:grid-cols-2 sm:grid-rows-2 sm:justify-center'>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          href={project.link}
          logo={project.icon}
        />
      ))}
    </section>
  );
};

export default LatestProjectsSection;
