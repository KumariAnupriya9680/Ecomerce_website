import React from 'react'
import './App.css';
import Maincom from './pages/Maincom';
import Cart from '././pages/cart/Cart';
import Navbar  from './component/Navbar';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import ShopContext from './context/ShopContext';
import SignIns from './pages/SignIns';
import Checkout from './pages/Checkout';


function App() {
 
  return (
    <>
    <ShopContext>
    <Navbar/>
    
   <Routes>
   <Route path="/" element={<Maincom/>}/>
   <Route path="/Cart" element={<Cart/>}/>
   <Route path="/SignIns" element={<SignIns/>}/>
   <Route path='/Checkout' element={<Checkout/>}/>
   </Routes>
   <Footer/>
   </ShopContext>
    </>
  );
}

export default App;
