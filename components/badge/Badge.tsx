import { cn } from '@/lib/utils/common/cn';
import { CvaBaseComponentProps } from '@/lib/utils/common/common.interface';
import { rounded } from './_utils/badge.interface';
import { BADGE_VARIANTS } from './_utils/badge.constants';

interface Props extends CvaBaseComponentProps {
  rounded?: rounded;
}

function Badge({ children, className, color, size, rounded }: Props) {
  return (
    <span className={cn(BADGE_VARIANTS({ color, size, rounded }), className)}>
      {children}
    </span>
  );
}

export default Badge;
