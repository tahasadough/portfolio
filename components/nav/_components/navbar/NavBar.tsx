import NavBarProfile from './_components/NavBarProfile';
import NavBarLinks from './_components/NavBarLinks';
import NavMenuToggler from '../navmenu/_components/NavMenuToggler';

function NavBar() {
  return (
    <nav className='border-light-black fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b px-4 py-2 text-sm backdrop-blur md:px-14 md:py-6 xl:px-56'>
      <NavBarProfile />
      <NavBarLinks />
      <NavMenuToggler />
    </nav>
  );
}

export default NavBar;
