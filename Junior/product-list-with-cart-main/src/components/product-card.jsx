import React from 'react';

export const ProductCard = () => {
  return (
    <div className='relative'>
      <img
        className='rounded-lg mb-[38px]'
        src='/public/assets/images/image-baklava-mobile.jpg'
        alt='Baklava'
      />

      {/* <button className='absolute inset-x-0 mx-auto top-[190px] w-40 p-3 bg-rose-50 border-[1.5px] border-rose-900 rounded-full flex justify-center items-center gap-2 cursor-pointer hover:border-red hover:text-red transition-all duration-300'>
        <img
          src='/public/assets/images/icon-add-to-cart.svg'
          alt='Add to Cart'
        />
        <span>Add to Cart</span>
      </button> */}
      <div className=' absolute inset-x-0 mx-auto top-[190px] w-40 p-3 bg-red  rounded-full flex justify-between items-center gap-2 cursor-pointer text-red-50 hover:border-red  transition-all duration-300 '>
        <img
          className='border border-rose-50 size-[18px] p-1 rounded-full hover:bg-rose-50 hover:text-red-900'
          src='/public/assets/images/icon-decrement-quantity.svg'
          alt='Decrement Quantity'
        />
        <p>1</p>
        <img
          className='border border-rose-50 size-[18px] p-1 rounded-full hover:bg-rose-50 hover:text-red-900'
          src='/public/assets/images/icon-increment-quantity.svg'
          alt='Increment Quantity'
        />
      </div>
      <p>Waffle</p>
      <h2>Waffle with Berries</h2>
      <p>$6.50</p>
    </div>
  );
};


