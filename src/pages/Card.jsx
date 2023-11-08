import React,{useState,useEffect,useContext}from 'react'
import {PRODUCTS} from '../product';
import  {ShopContextitem} from "../context/ShopContext";
import './shop.css';
const Card = (props) => {
   const{id,title, imageSrc,price, description}=props.data;
   const {additem,cartItem} =useContext(ShopContextitem);
   const cartItemCount = cartItem[id];
  return (
     
   <>
   
   <div className="product">
    
        <h1>{title}</h1>
    
        <img src={imageSrc}/>
        <div className="description">
        <p>{description}</p>
        </div>
       
        <div className='par'>
        <p><b>${price}</b></p>
        </div>
    
        <button className="addToCartBttn" onClick={()=>additem(id)}> 
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>} 
        </button>
         
    
   </div>
   
   
   </>
  )
}

export default Card;