'use client';
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import NavMenu from './NavMenu';
import { AnimatePresence } from 'motion/react';

const NavMenuToggler = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <section className='md:hidden'>
      <Hamburger size={20} toggle={setIsToggled} toggled={isToggled} />
      <AnimatePresence>
        {isToggled && <NavMenu setIsToggled={setIsToggled} />}
      </AnimatePresence>
    </section>
  );
};

export default NavMenuToggler;
