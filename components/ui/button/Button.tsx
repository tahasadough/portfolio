import { cn } from '@/lib/utils/common/cn';
import { CvaBaseComponentProps } from '@/lib/utils/common/common.interface';
import { BUTTON_VARIANTS } from './_utils/button.constants';
import * as motion from 'motion/react-client';

function Button({ children, variant, size }: CvaBaseComponentProps) {
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

export default Button;
