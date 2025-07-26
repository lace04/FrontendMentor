import React from 'react';

function Text({ title, description, color, order }) {
  return (
    <div
      className={`${order} text-center h-[437px] flex flex-col place-content-around p-6 tablet:h-auto lg:px-[65px] desktop:text-left desktop:pl-[165px] desktop:py-[140px] desktop:pr-[105px]`}
    >
      <h2 className='font-fraunces text-[2rem] font-extrabold lg:text-[2.5rem] tablet:text-[1.25rem] desktop:leading-tight'>
        {title}
      </h2>
      <p className='font-barlow text-darkGrayishBlue text-[1.125rem] tablet:text-[0.8rem] leading-[1.875rem] tablet:leading-[1.25rem] lg:text-lg'>
        {description}
      </p>
      <div className='relative'>
        <button className='uppercase font-fraunces'>Learn More</button>
        <div
          className={`w-[137px] h-[10px] rounded-full ${color} absolute bottom-0 left-0 right-0 mx-auto -z-[10] opacity-25 desktop:mx-0 desktop:left-[-10px]`}
        ></div>
      </div>
    </div>
  );
}

export default Text;
