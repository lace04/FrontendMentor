import React, { useState } from 'react';
import hamburger from '../assets/images/icon-hamburger.svg';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  console.log(showMenu);

  return (
    <nav className=''>
      <ul
        className={`${
          showMenu ? 'flex' : 'hidden'
        } bg-white w-[329px] h-[305px] absolute left-0 mx-auto right-0 top-[106px] flex-col py-[26px] items-center place-content-around font-barlow text-darkGrayishBlue font-normal text-[1.1250em] after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-white z-10
        
        sm:flex sm:flex-row sm:after:hidden sm:bg-transparent sm:top-0 sm:w-[400px] sm:h-[24px] sm:mx-0 sm:relative sm:items-center sm:justify-between sm:text-[0.9em] sm:py-0 sm:place-content-center sm:text-white sm:font-normal
        
        md:w-[400px]
        `}
      >
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li className='bg-yellow sm:bg-white sm:hover:bg-whitea sm:hover:text-white trasition duration-500 text-center font-fraunces uppercase font-bold px-4 py-3 w-[120px] rounded-full text-veryDarkDesaturatedBlue cursor-pointer sm:text-[1em]'>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <div className='cursor-pointer sm:hidden' onClick={handleClick}>
        <img src={hamburger} alt='menu hamburger' />
      </div>
    </nav>
  );
}

export default Navbar;
