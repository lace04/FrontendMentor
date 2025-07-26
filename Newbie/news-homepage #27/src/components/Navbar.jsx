import React, { useState } from 'react';
import hamburgerMenu from '../assets/images/icon-menu.svg';
import closeBtn from '../assets/images/icon-menu-close.svg';

function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  const handleClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      <ul
        className={`${
          showMenu ? 'hidden' : ''
        } absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}
      >
        <li
          className={`${showMenu} ? 'hidden' : ''} cursor-pointer sm:hidden flex place-content-end`}
        >
          <img
            className='w-8 h-8 mb-[87px]'
            src={closeBtn}
            onClick={handleClick}
            alt=''
          />
        </li>
        <li className='mb-8 sm:mb-0'>
          <a href='#' className='hover:text-softOrange transition duration-500'>
            Home
          </a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-softOrange transition duration-500' href='#'>
            New
          </a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-softOrange transition duration-500' href='#'>
            Popular
          </a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-softOrange transition duration-500' href='#'>
            Trending
          </a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-softOrange transition duration-500' href='#'>
            Categories
          </a>
        </li>
      </ul>

      <img
        src={hamburgerMenu}
        alt='suprimir'
        className={`${
          showMenu ? '' : 'hidden'
        } w-10 h-4 cursor-pointer sm:hidden`}
        onClick={handleClick}
      />
    </>
  );
}

export default Navbar;
