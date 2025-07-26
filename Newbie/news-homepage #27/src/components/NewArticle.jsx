import React from 'react';

function NewArticle({ title, description }) {
  return (
    <article className='h-[140px] border-b-2 border-grayishBlue py-7 last:border-none'>
      <h2 className='cursor-pointer lg:text-base hover:text-softOrange text-[20px] mb-3 font-bold'>
        {title}
      </h2>
      <p className='text-[15px] lg:text-[12px]'>{description}</p>
    </article>
  );
}

export default NewArticle;
