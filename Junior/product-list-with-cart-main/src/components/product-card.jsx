import React from 'react';

// Waffle with Berries
//   Waffle
//   6.50
//   Add to Cart

export const ProductCard = () => {
  return (
    <div>
      <img src='/public/assets/images/image-baklava-mobile.jpg' alt='Baklava' />
      <button>
        <img
          src='/public/assets/images/icon-add-to-cart.svg'
          alt='Add to Cart'
        />
        <span>Add to Cart</span>
      </button>
      <p>Waffle</p>
      <h2>Waffle with Berries</h2>
      <p>$6.50</p>
    </div>
  );
};
