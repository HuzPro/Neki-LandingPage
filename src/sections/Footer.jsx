import { copyrightSign } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={headerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0 brightness-0'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-gray-600 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Neki store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12  rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} href={icon.href} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-black'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-gray-600 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-gray-600 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0 invert'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        
        
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        
      </div>
      <div className="flex flex-1 justify-center text-gray-600">
          <p>Developed by <a href="https://github.com/huzpro" target="_blank">Huz</a></p>
        </div>
    </footer>
  );
};

export default Footer;