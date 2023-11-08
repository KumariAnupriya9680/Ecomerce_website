import React,{useState,createContext} from 'react'
import { PRODUCTS } from '../product';


export const ShopContextitem = createContext(null);

const deafultvalue = () =>{
  let cart={};
 for(let i=1;i<PRODUCTS.length+1;i++){
  cart[i]=0;
 }
return cart;
};
const ShopContext = (props) => {
  const[cartItem ,setCartItem]=useState(deafultvalue());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const totalitems= () =>{
    let totalitem=0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        totalitem+=cartItem[item];
      }
    }
    return totalitem;
  }

 const additem = (itemid) =>{
  setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
 };
 const removeitem = (itemid) =>{
  setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
 };
 const updateCartItemCount = (newAmount, itemid) => {
  setCartItem((prev) => ({ ...prev, [itemid]: newAmount }));
};
  
const allitem={
  cartItem,additem,removeitem,updateCartItemCount,getTotalCartAmount,totalitems
};

  return (
    <ShopContextitem.Provider value={allitem}>{props.children}</ShopContextitem.Provider>
  )
}

export default ShopContext;