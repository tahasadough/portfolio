import { NavBarLink } from '@/app/Interfaces';
import Link from 'next/link';

const NavBarLinksSection = () => {
  const links: NavBarLink[] = [
    { href: '#portfolio', name: 'Portfolio' },
    { href: '#about', name: 'About' },
    { href: '#contact', name: 'Contact' },
  ];

  const linkStyles = 'hover:text-[--gray] transition-all duration-500';

  return (
    <section className='hidden space-x-8 md:block'>
      {links.map((link, i) => (
        <Link key={i} href={link.href} className={linkStyles}>
          {link.name}
        </Link>
      ))}
    </section>
  );
};

export default NavBarLinksSection;
