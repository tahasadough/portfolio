import { ReactNode } from 'react';
import * as motion from 'motion/react-client';

interface Props {
  children: ReactNode;
  center?: boolean;
  className?: string;
}

const PilledTitle = ({ children, center, className }: Props) => {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileTap={{ scale: 1.1 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`pilled-title border-light-black bg-lighter-black w-fit cursor-pointer rounded-3xl border px-4 py-2 text-sm ${
        center && 'mx-auto'
      } ${className}`}
    >
      {children}
    </motion.h3>
  );
}; // TODO: make mx-auto optional as a className props

export default PilledTitle;
