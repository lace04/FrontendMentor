import React from 'react';
import imgMobile from '../assets/images/mobile/image-header.jpg';
import imgDesktop from '../assets/images/desktop/image-header.jpg';
import arrow from '../assets/images/icon-arrow-down.svg';

function Main() {
  return (
    <section>
      <picture>
        <source media='(max-width:639px)' srcSet={imgMobile} />
        <source media='(min-width:640px)' srcSet={imgDesktop} />
        <img src={imgMobile} alt='image background' />
      </picture>
      <p
        className='absolute font-fraunces text-[40px] uppercase tracking-[6.25px] text-white text-center w-[327px] top-[144px] left-0 mx-auto right-0 
        
        sm:w-[660px] sm:text-[50px] sm:top-[200px] tablet:top-[80px]'
      >
        We are creatives
      </p>
      <img
        className='absolute top-[290px] left-0 mx-auto right-0 sm:top-[360px] tablet:top-[220px]'
        src={arrow}
        alt='arrowdown'
      />
    </section>
  );
}

export default Main;
