import React from 'react';
import Image from './Image';
import Text from './Text';
import ImageText from './ImageText';

//images
import imgEggMobile from '../assets/images/mobile/image-transform.jpg';
import imgEggDesktop from '../assets/images/desktop/image-transform.jpg';
import imgStandOutMobile from '../assets/images/mobile/image-stand-out.jpg';
import imgStandOutDesktop from '../assets/images/desktop/image-stand-out.jpg';
import imgGraphicMobile from '../assets/images/mobile/image-graphic-design.jpg';
import imgGraphicDesktop from '../assets/images/desktop/image-graphic-design.jpg';
import imgPhotographyMobile from '../assets/images/mobile/image-photography.jpg';
import imgPhotographyDesktop from '../assets/images/desktop/image-photography.jpg';

function Services() {
  return (
    <section className='tablet:grid tablet:grid-cols-2'>
      <Image
        order='order-2'
        imgMobile={imgEggMobile}
        imgDesktop={imgEggDesktop}
      />
      <Text
        title={'Transform your brand'}
        description={
          'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
        }
        color='bg-yellow'
        order='order-1'
      />
      <Image
        imgMobile={imgStandOutMobile}
        imgDesktop={imgStandOutDesktop}
        order='order-3'
      />
      <Text
        title={'Stand out to the right audience'}
        description={
          'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
        }
        color='bg-softRed'
        order='order-4'
      />
      <ImageText
        imgMobile={imgGraphicMobile}
        imgDesktop={imgGraphicDesktop}
        title={'Graphic design'}
        description={
          'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
        }
        color='text-darkDesaturatedCyan'
        order='order-5'
      />
      <ImageText
        imgMobile={imgPhotographyMobile}
        imgDesktop={imgPhotographyDesktop}
        title={'Photography'}
        description={
          'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
        }
        color='text-darkBlue'
        order='order-6'
      />
    </section>
  );
}

export default Services;
