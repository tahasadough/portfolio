import { useEffect, useState } from 'react';
import { ScreenSize } from '@/app/Interfaces';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });

    const resizeEventListener = window.addEventListener('resize', () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    });

    return () => window.removeEventListener('resize', resizeEventListener!);
  }, []);

  return screenSize;
};

export default useScreenSize;
