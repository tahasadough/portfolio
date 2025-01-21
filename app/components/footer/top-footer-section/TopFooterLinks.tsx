import { FooterLink } from '@/app/Interfaces';
import Link from 'next/link';

const TopFooterLinks = () => {
  const links: FooterLink[] = [
    { href: '#portfolio', name: 'Portfolio' },
    {
      href: 'https://github.com/TahaSadough',
      name: 'Github',
      target: '_blank',
    },
    { href: '#contact', name: 'Contact' },
    { href: 'https://www.linkedin.com/in/taha-sadough/', name: 'Linkedin' },
    { href: '#about', name: 'About' },
    { href: 'https://medium.com/@@tahasadoughdev', name: 'Medium' },
  ];
  return (
    <section className='grid grid-cols-2 gap-2 text-sm'>
      {links.map((link, i) => (
        <Link key={i} href={link.href} target={link.target && link.target}>
          {link.name}
        </Link>
      ))}
    </section>
  );
};

export default TopFooterLinks;
