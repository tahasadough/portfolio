'use client';
import mouseTrail from '@codemasters/mousetrail';
import useScreenSize from '../hooks/useScreenSize';
import { useEffect } from 'react';

const InitializeMouseTrail = () => {
  const { width } = useScreenSize();

  useEffect(() => {
    if (width > 768) mouseTrail();
    else mouseTrail.distroy();
  }, [width]);

  return <></>;
};

export default InitializeMouseTrail;
