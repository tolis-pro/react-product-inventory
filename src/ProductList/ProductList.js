// ProductList.js

import React, { useState } from 'react';
import Product from '../Product/Product';
import './ProductList.css';
const ProductList = ({ products }) => {
  const [priceFilter, setPriceFilter] = useState('');

  const handleFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const filteredProducts = priceFilter
    ? products.filter((product) => product.price <= parseFloat(priceFilter))
    : products;

  return (
    <div className="product-list">
      <h2>Product Inventory</h2>
      <label>
        Filter by Price (less than or equal to $):
        <input
          type="number"
          value={priceFilter}
          onChange={handleFilterChange}
          className="filter-input"
        />
      </label>
      <ul>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
