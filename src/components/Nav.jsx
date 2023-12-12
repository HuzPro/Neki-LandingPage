import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navcross } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleHamburgerClick = () => {
        setIsOpen(!isOpen);
      };
  
    return (
    <header className=' fixed padding-x py-5 z-20 w-full backdrop-blur-xl'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img
                    src={headerLogo}
                    alt="Logo"
                    width={128}
                    height={28}
                    className='m-0 w-[128px] h-[28px]'
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-20 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray btn group flex items-center bg-transparent tracking-wide'>
                            <span className="relative pb-1 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-coral-red after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                                {item.label}
                            </span>
                            
                        </a>
                    </li>
                ))}
            </ul>
            <div className=' gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 -mr-10 bg-transparent justify-center flex'>
                <a className='group' href='/'>
                    <span className="relative pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-coral-red after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Sign in</span>
                </a>
                <span>/</span>
                <a className='group' href='/'>
                    <span className="relative pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-coral-red after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Explore Now</span>
                </a>
            </div>
            <div className='hidden max-lg:block'>
                {isOpen ? <img src={navcross} alt="Navcross" width={25} height={25} onClick={handleHamburgerClick} className=' cursor-pointer'/> 
                        : <img src={hamburger} alt="Hamburger" width={25} height={25} onClick={handleHamburgerClick} className=' cursor-pointer'/>}
            </div>
        </nav>
        {isOpen && (
          <div className=" dropdown-menu absolute mt-5 right-0 gap-x-10 bg-white rounded-md shadow-lg">
            <ul className='grow flex-col list-item'>
              <li className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer pointer-events-auto'><a href="#home">Home</a></li>
              <li className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer pointer-events-auto'><a href="#about-us">About Us</a></li>
              <li className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer pointer-events-auto'><a href="#products">Products</a></li>
              <li className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer pointer-events-auto'><a href="#contact-us">Contact Us</a></li>
              <li className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer pointer-events-auto'><a href="/signin">Sign In</a></li>
              <li className='hover:bg-coral-red m-1 pl-2 pr-2 rounded-md cursor-pointer pointer-events-auto'><a href="/explore-now">Explore Now</a></li>
            </ul>
          </div>
        )}

    </header>
  );
};

export default Nav;