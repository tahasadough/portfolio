import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import NavBar from './components/home/nav/navbar/NavBar';
import Footer from './components/footer/Footer';
import InitializeLenis from './InitializeLenis';
import InitializeMouseTrail from './mouse-trail/InitializeMouseTrail';
import InitializeMotion from './motion/InitializeMotion';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Taha Sadough's Portfolio",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang='en' className='overflow-x-hidden md:overflow-auto'>
      <body className='overflow-x-hidden antialiased md:overflow-auto'>
        <header className='lg:container'>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer className='container'>
          <Footer />
        </footer>
        <InitializeLenis />
        <InitializeMotion />
        <InitializeMouseTrail />
      </body>
    </html>
  );
};

// Base UI & UX by a framer template (some sections) and frontend by me
export default RootLayout;