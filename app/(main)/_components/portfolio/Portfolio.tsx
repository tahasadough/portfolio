import PortfolioTitle from './_components/PortfolioTitle';
import PortfolioLatestProjects from './_components/PortfolioLatestProjects';

function Portfolio() {
  return (
    <section
      id='portfolio'
      className='flex flex-col items-center justify-center space-y-8 py-20 md:space-y-[10px] md:px-8 md:py-[100px] lg:space-y-12 lg:pt-[120px] lg:pb-[100px]'
    >
      <PortfolioTitle />
      <PortfolioLatestProjects />
    </section>
  );
}

export default Portfolio;
