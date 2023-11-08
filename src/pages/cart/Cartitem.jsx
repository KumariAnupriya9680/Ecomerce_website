import React,{useContext} from 'react'
import './cart.css';
import {ShopContextitem}  from '../../context/ShopContext';
const Cartitem = (props) => {
    const{id,title, imageSrc,price, description}=props.data;
    const {cartItem,additem,removeitem,updateCartItemCount}=useContext(ShopContextitem);
  return (
    <>
    <div className="cartItems">
    <img src={imageSrc}/>
    <div className='par'>
    <h1>{title}</h1>
    <p>{price}</p>
     
   
    <div className='butt'>
      <button onClick={()=>additem(id)}>+</button>
      <input value={cartItem[id]}  onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
      <button onClick={()=>removeitem(id)}>-</button>
    </div>
    </div>

    
     

</div>
    </>
  )
}

export default Cartitem