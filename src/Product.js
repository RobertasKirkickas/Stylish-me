import React from 'react';

const Product = ({ name, price, image, onAddToCart }) => {
  return (
    <div className="col-12 col-md-4 mb-3">
      <div className="card product-bg">
        <img src={image} alt={name} className="card-img-top product-image" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">£{price}</p>
          <button onClick={() => onAddToCart({ name, price, image })}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

  
  

export default Product;