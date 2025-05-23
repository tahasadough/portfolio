import Footer from '@/components/footer/Footer';
import NavBar from '@/components/nav/_components/navbar/NavBar';
import { ReactNode } from 'react';

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <header className='lg:container'>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer className='container'>
        <Footer />
      </footer>
    </>
  );
}
