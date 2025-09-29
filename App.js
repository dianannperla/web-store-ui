import React from 'react';
import { ProductCard } from './components';

const App = () => {
  return (
    <div>
      <ProductCard 
        title='Product 1'
        price='$200.00'
        image='image-url'
      />
    </div>
  );
};

export default App;