import React from 'react';
import Navbar from './Navbar';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <header className='absolute flex justify-between w-full py-8 px-6'>
      <img src={logo} alt='logo' />
      <Navbar />
    </header>
  );
}

export default Header;
