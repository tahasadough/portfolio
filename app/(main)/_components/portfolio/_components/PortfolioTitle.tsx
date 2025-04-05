import Badge from '@/components/badge/Badge';
import * as motion from 'motion/react-client';

function PortfolioTitle() {
  return (
    <>
      <Badge>Portfolio</Badge>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='text-center text-[32px] leading-none text-[--gray] lg:text-5xl'
      >
        My Latest <span className='text-white'>Projects</span>
      </motion.h1>
    </>
  );
}

export default PortfolioTitle;
