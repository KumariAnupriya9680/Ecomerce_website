import React,{useContext} from 'react'
import './cart.css';
import { PRODUCTS } from '../../product'
import { ShopContextitem } from '../../context/ShopContext';
import Cartitem from './Cartitem';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {additem,cartItem,getTotalCartAmount} =useContext(ShopContextitem);
  const totalamont=getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <>
    <div className="cart-it">
        {PRODUCTS.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <Cartitem data={product} />;
          }
        })}
      </div>


  <div className="checkout">
    <p> Subtotal: ${totalamont} </p>
    <button onClick={() => navigate("/")}> Continue Shopping </button>
    <button onClick={()=>navigate("/Checkout")}>
    Checkout
    </button>
  </div>

 

 </>
  )
}

export default Cart