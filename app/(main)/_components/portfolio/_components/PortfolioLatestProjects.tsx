import { Project } from '../_utils/portfolio.interfaces';
import Icon from '@/components/icon/Icon';
import Card from '@/components/ui/card/Card';

function PortfolioLatestProjects() {
  const projects: Project[] = [
    {
      title: 'SpicyHooks',
      link: 'https://github.com/tahasadough/spicyhooks',
      icon: <Icon.SpicyHooks />,
    },
    {
      title: 'Whisper',
      link: 'https://github.com/tahasadough/whisper',
      icon: <Icon.Whisper />,
    },
    {
      title: 'Portfolio',
      link: 'https://github.com/tahasadough/portfolio',
      icon: <Icon.T />,
    },
    {
      title: 'MouseTrail',
      link: 'https://github.com/tahasadough/mousetrail',
    },
  ];
  return (
    <section className='grid w-full gap-8 sm:grid-cols-2 sm:grid-rows-2 sm:justify-center'>
      {projects.map((project, i) => (
        <Card.Project
          key={i}
          title={project.title}
          href={project.link}
          logo={project.icon}
        />
      ))}
    </section>
  );
}

export default PortfolioLatestProjects;
