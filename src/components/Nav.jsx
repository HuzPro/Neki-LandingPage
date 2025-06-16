import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { headerLogo } from '../assets/images';
import { hamburger, navcross, shoppingCart } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className='fixed padding-x py-5 z-20 w-full backdrop-blur-xl'>
      <nav className='flex justify-between items-center max-container'>
        <Link to="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={128}
            height={28}
            className='m-0 w-[128px] h-[28px]'
          />
        </Link>

        {/* Desktop navigation */}
        <ul className='flex-1 flex justify-center items-center gap-20 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <HashLink 
                smooth 
                to={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray btn group flex items-center bg-transparent tracking-wide'
              >
                <span className="relative pb-1 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-coral-red after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                  {item.label}
                </span>
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Products Catalog (desktop) */}
        <div className='gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 -mr-10 bg-transparent justify-center flex'>
                <Link className='group' to='/products'>
            <span className="relative pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-coral-red after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
              Products
            </span>
          </Link>

         </div>
     

        {/* Auth links (desktop) */}
        <div className='gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 -mr-10 bg-transparent justify-center flex'>
          <Link className='group' to='/signin'>
            <span className="relative pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-coral-red after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
              Sign in
            </span>
          </Link>
          <span>/</span>
          <Link className='group' to='/signup'>
            <span className="relative pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-coral-red after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
              Sign up
            </span>
          </Link>
        </div>

        {/* Cart (desktop) */}
        <div className='gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 -mr-10 bg-transparent justify-center flex'>
          <Link className='group' to='/cart'>
              <img
              src={shoppingCart}
              alt="Cart"
              className="w-12 h-12"
              />
          </Link>
        </div>


        {/* Hamburger menu toggle */}
        <div className='hidden max-lg:block'>
          <img
            src={isOpen ? navcross : hamburger}
            alt="Menu toggle"
            width={25}
            height={25}
            onClick={handleHamburgerClick}
            className='cursor-pointer'
          />
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu absolute mt-5 right-0 gap-x-10 bg-white rounded-md shadow-lg">
          <ul className='grow flex-col list-item p-2'>
          {navLinks.map((item) => (
            <li key={item.label} className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer'>
              <HashLink 
                smooth 
                to={item.href}
              >
                  {item.label}
              </HashLink>
            </li>
          ))}
          <li className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer'>
          <Link to="/products" onClick={handleCloseMenu}>Products</Link>
          </li>
            <li className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer'>
              <Link to="/signin" onClick={handleCloseMenu}>Sign In</Link>
            </li>
            <li className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer'>
              <Link to="/signup" onClick={handleCloseMenu}>Sign Up</Link>
            </li>
            <li className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer'>
              <Link to="/cart" onClick={handleCloseMenu}>Cart</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;

