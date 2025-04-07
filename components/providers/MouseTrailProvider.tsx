'use client';
import mouseTrail from '@codemasters/mousetrail';
import { useEffect, ReactNode } from 'react';
import { useScreenSize } from 'spicyhooks';

interface Props {
  children: ReactNode;
}

function MouseTrailProvider({ children }: Props) {
  const { screenWidth } = useScreenSize();

  useEffect(() => {
    if (screenWidth > 768) mouseTrail();
    else mouseTrail.distroy();
  }, [screenWidth]);

  return <>{children}</>;
}

export default MouseTrailProvider;
