'use client';
import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { DEFAULT_OPTIONS } from './_lib/lenis.constants';
import { InitializeLenis } from './_utils/initialize-lenis';
import { LenisOptions } from 'lenis';

interface Props {
  children: ReactNode;
  options?: LenisOptions;
}

export default function LenisProvider({
  children,
  options = DEFAULT_OPTIONS,
}: Props) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = InitializeLenis(options);

    window.onbeforeunload = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    return () => {
      lenis.destroy();
    };
  }, [options, pathname]);

  return <>{children}</>;
}
