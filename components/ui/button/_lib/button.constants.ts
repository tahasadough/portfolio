import { cva } from 'class-variance-authority';

export const BUTTON_VARIANTS = cva('button', {
  variants: {
    variant: {
      default: 'bg-almost-black',
      outline: 'border-gray border',
    },
    size: {
      default: 'px-4 py-2',
      sm: 'px-3 py-1',
      lg: 'px-6 py-3 text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
