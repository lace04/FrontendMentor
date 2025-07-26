import React from 'react';
import Testimonial from './Testimonial';

//images
import emilyPhoto from '../assets/images/image-emily.jpg';
import thomasPhoto from '../assets/images/image-thomas.jpg';
import jenniePhoto from '../assets/images/image-jennie.jpg';

function TestimonialContainer() {
  return (
    <section className='bg-white pt-16 lg:pt-32 lg:mb-16'>
      <h2 className='font-fraunces text-grayishBlue uppercase text-center mb-16'>
        Client Testimonial
      </h2>
      <div className='lg:flex justify-center'>
        <Testimonial
          img={emilyPhoto}
          testimonial='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
          name='Emily R.'
          position='Marketing Director'
        />
        <Testimonial
          img={thomasPhoto}
          testimonial='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
          name='Thomas S.'
          position='Chief Operating Officer'
        />
        <Testimonial
          img={jenniePhoto}
          testimonial='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
          name='Jennie F.'
          position='Business Owner'
        />
      </div>
    </section>
  );
}

export default TestimonialContainer;
