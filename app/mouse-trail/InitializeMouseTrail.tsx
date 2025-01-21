'use client';
import createMT from '@codemasters/mousetrail';
import { useEffect } from 'react';

const InitializeMouseTrail = () => {
  useEffect(() => {
    createMT();
  }, []);

  return <></>;
};

export default InitializeMouseTrail;
