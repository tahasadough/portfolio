import * as motion from 'motion/react-client';
import { NavBarLink } from '@/app/Interfaces';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface Props {
  setIsToggled: (value: boolean) => void;
}

const NavMenu = ({ setIsToggled }: Props) => {
  const navMenuRef = useRef(null);

  const links: NavBarLink[] = [
    { href: '#portfolio', name: 'Portfolio' },
    { href: '#about', name: 'About' },
    { href: '#contact', name: 'Contact' },
  ];

  useEffect(() => {
    const navMenuNode: HTMLElement = navMenuRef.current!;
    const closeNavMenu = () => setIsToggled(false);
    const navMenuClickEventListener = navMenuNode.addEventListener(
      'click',
      (e: MouseEvent) => {
        const targetElement = e.target as HTMLElement;
        if (targetElement.classList.contains('navmenu-link')) {
          closeNavMenu();
        }
      },
    );

    return () =>
      navMenuNode.removeEventListener('click', navMenuClickEventListener!);
  }, [setIsToggled]);

  const linkStyles = 'hover:text-[--gray] transition-all duration-500';
  return (
    <motion.div
      ref={navMenuRef}
      initial={{ height: 0 }}
      animate={{ height: 'auto' }}
      exit={{ height: 0 }}
      transition={{ duration: 0.4 }}
      className='fixed right-0 top-0 -z-10 w-full border-b border-[--light-black] bg-[--almost-black]'
    >
      <section className='space-y-8 px-5 pb-10 pt-16 text-lg'>
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className='border-t-2 border-[--light-black] p-1'
        ></motion.div>
        {links.map((link, i) => (
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            key={i}
          >
            <Link
              key={i}
              href={link.href}
              className={`${linkStyles} navmenu-link block`}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
};

export default NavMenu;