import React from 'react';

function Article({ image, number, title, description }) {
  return (
    <article className='flex h-[162px] items-center'>
      <div className='flex-none'>
        <img src={image} alt='image article' className='w-[100px] h-[130px] ' />
      </div>
      <div className='pl-6'>
        <p className='text-grayishBlue text-3xl mb-[12px] font-bold'>
          {number}
        </p>
        <h2 className='text-veryDarkBlue font-bold mb-[12px] hover:text-softOrange hover:cursor-pointer'>
          {title}
        </h2>
        <p className='text-darkGrayishBlue'>{description}</p>
      </div>
    </article>
  );
}

export default Article;
