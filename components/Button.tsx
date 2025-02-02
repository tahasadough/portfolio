import { ReactNode } from 'react';
import * as motion from 'motion/react-client';

interface Props {
  children: ReactNode;
  center?: boolean;
}

const Button = ({ children, center }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ backgroundColor: '#ffffff', color: '#000000' }}
      viewport={{ once: true }}
      className={`border-gray w-fit cursor-pointer rounded-3xl border px-8 py-[0.63rem] font-bold ${center && 'mx-auto'}`}
    >
      {children}
    </motion.div>
  );
};

export default Button;

// TODO: Add arrow svg
