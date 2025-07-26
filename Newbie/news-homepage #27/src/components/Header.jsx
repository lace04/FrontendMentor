import React from 'react';
import Navbar from './Navbar';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <header className='flex place-content-between items-center py-7'>
      <img src={logo} alt='logo-w' />
      <Navbar />
    </header>
  );
}

export default Header;
