import { cn } from '@/lib/utils/common/cn';
import { CvaBaseComponentProps } from '@/lib/utils/common/common.interface';
import { BUTTON_VARIANTS } from './_utils/button.constants';
import * as motion from 'motion/react-client';

function Button({ children, variant, size }: CvaBaseComponentProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ backgroundColor: '#ffffff', color: '#000000' }}
      viewport={{ once: true }}
      className={cn(BUTTON_VARIANTS({ variant, size }))}
    >
      {children}
    </motion.button>
  );
}

export default Button;
