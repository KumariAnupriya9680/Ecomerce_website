import "./shop.css";
import React from 'react';
import Home from '../component/Home';
import Card from './Card';
import {PRODUCTS} from '../product';

const Maincom = () => {
   
  return (
   <>
   <Home/>
    <div className="products">
     
        {PRODUCTS.map((product) => (
          <Card data={product} />
        ))}
       
       
      </div>
    
    
   </>
  )
}

export default Maincom