import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
}

const IconWrapperCard = ({ icon }: Props) => {
  return (
    <div className='flex size-12 items-center justify-center rounded-lg border border-[--light-black] bg-[--lighter-black]'>
      {icon}
    </div>
  );
};

export default IconWrapperCard;
