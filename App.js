import React from 'react';
import { ProductCard } from './components';

const App = () => {
  return (
    <div>
      <ProductCard 
        title='Sản phẩm 1'
        price='200,000đ'
        image='image-url'
      />
    </div>
  );
};

export default App;