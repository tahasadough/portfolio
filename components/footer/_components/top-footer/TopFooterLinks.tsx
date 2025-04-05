import Link from 'next/link';
import { FOOTER_LINKS } from '../../_utils/footer.constants';

function TopFooterLinks() {
  return (
    <section className='grid grid-cols-2 gap-2 text-sm'>
      {FOOTER_LINKS.map((link, i) => (
        <Link key={i} href={link.href} target={link.target}>
          {link.name}
        </Link>
      ))}
    </section>
  );
}

export default TopFooterLinks;
