import React from 'react';
import ProductList from './ProductList/ProductList';

const products = [
  {
    id: 1,
    name: 'Laptop',
    description: 'Powerful laptop with high-performance features, ideal for work or gaming.',
    price: 1299.99,
    quantity: 20,
  },
  {
    id: 2,
    name: 'Smartphone',
    description: 'Latest smartphone with a stunning display, advanced camera, and long battery life.',
    price: 799.99,
    quantity: 3,
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    description: 'Over-ear wireless headphones with noise-canceling technology for an immersive audio experience.',
    price: 149.99,
    quantity: 8,
  },
  
];

const App = () => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default App;
