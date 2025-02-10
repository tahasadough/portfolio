import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import NavBar from '@/components/nav/navbar/NavBar';
import Footer from '@/components/footer/Footer';
import InitializeLenis from '@/utils/InitializeLenis';
import InitializeMouseTrail from '@/utils/InitializeMouseTrail';
import InitializeGsap from '@/utils/gsap/InitializeGsap';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Taha Sadough's Portfolio",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang='en' className='overflow-x-hidden md:overflow-auto'>
      <body className='overflow-x-hidden bg-black text-white antialiased select-none md:overflow-auto'>
        <header className='lg:container'>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer className='container'>
          <Footer />
        </footer>
        <InitializeLenis />
        <InitializeGsap />
        <InitializeMouseTrail />
      </body>
    </html>
  );
};

// Base UI & UX by a framer template (proxio template) (some sections) and frontend by me
export default RootLayout;
