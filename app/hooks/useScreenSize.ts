import { useEffect, useState } from 'react';
import { ScreenSize } from '../Interfaces';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const resizeEventListener = window.addEventListener('resize', () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    });

    return () => window.removeEventListener('resize', resizeEventListener!);
  }, []);

  return screenSize;
};

export default useScreenSize;
