import React,{useContext}from 'react';
import { ShoppingCart } from "phosphor-react";
import { Link } from 'react-router-dom';
import {ShopContextitem} from '../context/ShopContext';

const Navbar = () => {
 const { cartItem,totalitems}=useContext(ShopContextitem);
 const totalamount=totalitems();
  return (
   <>
    <div className="navbar">
      <Link to="/">
      <div className="navbar__logo">
        <img src="logo.png" alt="Amazon Logo" />
      </div>
      </Link>
      <div className="navbar__search ">
       
        <input type="text" className="navbar__searchInput" />
       
        <div className='search1'>
        <i className="fa fa-search"></i> {/* You may use a search icon library */}
        </div>
        
      </div>
      <div className="navbar__menu">
        <Link to="/SignIns" className="link">
        <div className="navbar__menuItem">SignIn</div>
        </Link>
        <div className="navbar__menuItem">Returns <br/>& Orders</div>
        <div className="navbar__menuItem">Account <br/>& Lists</div>
      </div>
      <div className="navbar__user">
      
      <Link to="/Cart">
          <ShoppingCart size={35} />
      </Link>
      {totalamount> 0 && (
      <span className="item-count"><> {totalamount}</></span> 
      )}
      </div>
    </div>
   </>
  )
}

export default Navbar