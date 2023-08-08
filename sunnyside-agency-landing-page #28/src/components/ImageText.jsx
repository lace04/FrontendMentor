import React from 'react';

function ImageText({
  order,
  title,
  description,
  imgMobile,
  imgDesktop,
  color,
}) {
  return (
    <div
      className={`${order} relative pt-[398px] sm:pt-[310px] tablet:pt-[150px] desktop:pt-[398px]`}
    >
      <picture className='absolute top-0 z-[-1]'>
        <source media='(max-width:639px)' srcSet={imgMobile} />
        <source media='(min-width:640px)' srcSet={imgDesktop} />
        <img src={imgMobile} alt='images services' />
      </picture>
      <div className=''>
        <h2
          className={`${color} font-fraunces text-3xl text-center mb-7 sm:text-5xl tablet:text-2xl desktop:text-[2rem]`}
        >
          {title}
        </h2>
        <p
          className={`${color} font-barlow text-center mx-3 mb-[60px] sm:text-xl sm:mx-20 tablet:mx-4 tablet:text-sm desktop:w-[300px] desktop:mx-auto`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default ImageText;
