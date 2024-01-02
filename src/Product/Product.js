// Product.js

import React from 'react';
import './Product.css'; // Import the external CSS file

const Product = ({ product }) => {
  const { id, name, description, price, quantity } = product;
  const isLowStock = quantity < 5;

  return (
    <li className={`product-item ${isLowStock ? 'low-stock' : ''}`}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity available: {quantity}</p>
      {isLowStock && <p className="low-stock">Low Stock!</p>}
    </li>
  );
};

export default Product;
