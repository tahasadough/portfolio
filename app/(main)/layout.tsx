import Footer from '@/components/footer/Footer';
import NavBar from '@/components/nav/_components/navbar/NavBar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function MainLayout({ children }: Readonly<Props>) {
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

export default MainLayout;
