import React from 'react';
import Image from './Image';

//images
import milkBottlesMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg';
import milkBottlesDesktop from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import orangeMobile from '../assets/images/mobile/image-gallery-orange.jpg';
import orangeDesktop from '../assets/images/desktop/image-gallery-orange.jpg';
import coneMobile from '../assets/images/mobile/image-gallery-cone.jpg';
import coneDesktop from '../assets/images/desktop/image-gallery-cone.jpg';
import sugarCubesMobile from '../assets/images/mobile/image-gallery-sugarcubes.jpg';
import sugarCubesDesktop from '../assets/images/desktop/image-gallery-sugarcubes.jpg';

function Gallery() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
      <Image imgMobile={milkBottlesMobile} imgDesktop={milkBottlesDesktop} />
      <Image imgMobile={orangeMobile} imgDesktop={orangeDesktop} />
      <Image imgMobile={coneMobile} imgDesktop={coneDesktop} />
      <Image imgMobile={sugarCubesMobile} imgDesktop={sugarCubesDesktop} />
    </div>
  );
}

export default Gallery;
