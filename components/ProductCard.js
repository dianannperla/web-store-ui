import React from 'react';

const ProductCard = ({ title, price, image }) => {
  return (
    <div className='product-card'>
      <img src={image} alt={title} className='product-image'/>
      <h2 className='product-title'>{title}</h2>
      <p className='product-price'>{price}</p>
    </div>
  );
};

export default ProductCard;