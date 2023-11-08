import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <div className='row'>
            <div className='col-3'>
            <ul>
            <li><h1>Get to Know Us</h1></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">MeGo Newsletter</a></li>
            <li><a href="#">About MeGo</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">MeGo Devices</a></li>
            <li><a href="#">MeGo Science</a></li>
          </ul>
            </div>

            <div className='col-3'>
          
          <ul>
          <li><h1>Make Money With Us</h1></li>
            <li><a href="#">Sell on MeGo</a></li>
            <li><a href="#">Sell apps on MeGo</a></li>
            <li><a href="#">Supply to MeGo</a></li>
            <li><a href="#">Product & Build <br/> Your Brand</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Become a Delivery Driver</a></li>
            <li><a href="#">Self-Publish with Us</a></li>
          </ul>
          </div>

          <div className='col-3'>
          <ul>
          <li><h1>MeGo Payment Products</h1></li>
            <li><a href="#">MeGo store Card</a></li>
            <li><a href="#">MeGo secure Card</a></li>
            <li><a href="#">MeGo Business Card</a></li>
            <li><a href="#">Shop with Points</a></li>
            <li><a href="#">Credit Card Marketplace</a></li>
            <li><a href="#">Reload Your Balance</a></li>
            <li><a href="#">UPI</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
          </div>

          <div className='col-3'>
          <ul>
          <li><h1 >Let Us Help You</h1></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Order</a></li>
            <li><a href="#">Shipping Rates & Policies</a></li>
            <li><a href="#">Return & Replacement</a></li>
            <li><a href="#">Manage Your <br/> Content and Devices</a></li>
            <li><a href="#">Your Recalls and <br/> Product Safety Alerts</a></li>
            <li><a href="#">Help</a></li>
          </ul>
          </div>
        </div>
        </div>
        <div className="row">
         
          <div className='col-12'>
        <img src='logo.png'
      alt="Your Logo"
      style={{
        
        width: '150px',  // Adjust the width as needed
        height: 'auto',  // This will maintain the aspect ratio
        // Add any other styles you want
      }}
      />
        </div>  
        </div>
       
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MeGo. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer