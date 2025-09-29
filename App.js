import React from 'react';
import { ProductCard } from './components';

const App = () => {
  return (
    <div>
      <ProductCard 
        title='Premium Product'
        price={199.99}
        image='image-url'
        description='This is a high-quality premium product.'
      />
    </div>
  );
};

export default App;