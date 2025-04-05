import Link from 'next/link';
import { NAV_LINKS } from '../../../_utils/navbar.constants';

function NavBarLinks() {
  return (
    <section className='hidden space-x-8 md:block'>
      {NAV_LINKS.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className='transition-all duration-500 hover:text-[--gray]'
        >
          {link.name}
        </Link>
      ))}
    </section>
  );
}

export default NavBarLinks;
