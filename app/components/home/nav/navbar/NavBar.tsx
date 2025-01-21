import NavBarProfileSection from './NavBarProfileSection';
import NavBarLinksSection from './NavBarLinksSection';
import NavMenuToggler from '../navmenu/NavMenuToggler';

const NavBar = () => {
  return (
    <nav className='fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-[--light-black] bg-opacity-50 px-4 py-2 text-sm backdrop-blur md:px-14 md:py-6 xl:px-56'>
      <NavBarProfileSection />
      <NavBarLinksSection />
      <NavMenuToggler />
    </nav>
  );
};

// TODO: maybe i changed it to fixed

export default NavBar;
