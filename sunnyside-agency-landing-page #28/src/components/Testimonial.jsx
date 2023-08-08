import React from 'react';

function Testimonial({ img, testimonial, name, position }) {
  return (
    <div className='flex flex-col items-center text-center mb-16'>
      <img className='w-[72px] rounded-full' src={img} alt='photo' />
      <p className='my-8 font-barlow text-veryDarkGrayishBlue px-4 max-w-[400px]'>
        {testimonial}
      </p>
      <h3 className='font-fraunces font-extrabold text-veryDarkDesaturatedBlue text-lg'>
        {name}
      </h3>
      <p className='text-grayishBlue font-barlow text-[14px]'>{position}</p>
    </div>
  );
}

export default Testimonial;
