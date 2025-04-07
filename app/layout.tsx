import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import LenisProvider from '@/providers/lenis/LenisProvider';
import MouseTrailProvider from '@/providers/MouseTrailProvider';
import GsapProvider from '@/providers/GsapProvider';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Taha Sadough's Portfolio",
};

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' className='overflow-x-hidden md:overflow-auto'>
      <body className='overflow-x-hidden bg-black text-white antialiased select-none md:overflow-auto'>
        <LenisProvider>
          <GsapProvider>
            <MouseTrailProvider>{children}</MouseTrailProvider>
          </GsapProvider>
        </LenisProvider>
      </body>
    </html>
  );
}

// Base UI & UX by a framer template (proxio template) (some sections) and frontend by me
export default RootLayout;
