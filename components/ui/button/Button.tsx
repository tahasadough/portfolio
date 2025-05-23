import { cn } from '@/lib/utils/cn';
import { CvaBaseComponentProps } from '@/lib/types/common.type';
import { BUTTON_VARIANTS } from './_lib/button.constants';
import * as motion from 'motion/react-client';

export default function Button({
  children,
  variant,
  size,
}: CvaBaseComponentProps) {
  return (
    <motion.button
      initial={{ y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ backgroundColor: '#ffffff', color: '#000000' }}
      viewport={{ once: true }}
      className={cn(BUTTON_VARIANTS({ variant, size }), 'opacity-0')}
    >
      {children}
    </motion.button>
  );
}
