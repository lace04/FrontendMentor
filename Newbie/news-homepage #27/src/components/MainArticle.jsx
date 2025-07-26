import React from 'react';
import imageMobile from '../assets/images/image-web-3-mobile.jpg';
import imageDesktop from '../assets/images/image-web-3-desktop.jpg';

function MainArticle() {
  return (
    <>
      <section className='mb-12'>
        <picture>
          <source media='(max-width: 640px)' srcSet={imageMobile} />
          <source media='(min-width: 641px)' srcSet={imageDesktop} />
          <img src={imageMobile} alt='image-article' />
        </picture>

        <div className='sm:flex sm:justify-between'>
          <div className='flex-1 py-6 max-w-[300px]'>
            <h2 className='text-[42px] font-bold sm:text-58px leading-none'>
              The Bright Future of Web 3.0?
            </h2>
          </div>
          <div className='flex-1 sm:pt-9 max-w-[350px]'>
            <p className='text-[13px] mb-10 sm:text-[15px] '>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className='bg-softRed text-offWhite uppercase px-4 py-2 w-[185px] h-[48px] sm:w-[200px] sm:h-[56px] font-semibold hover:bg-veryDarkBlue transition duration-500'>
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainArticle;
