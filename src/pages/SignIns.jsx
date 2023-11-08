import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './shop.css';
const SignIn = () => {
  const [formdata,setData]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
});
const handleInput = (event) =>{
    const name=event.target.name;
    const value=event.target.value;
    setData((prev)=>{
        return {...prev ,[name]:value};

    });

};
return (
<>

<div className="container">

<div className='register'>
<Link to="/">
      <div className="log">
        <img src="logo.png" alt="Amazon Logo" />
      </div>
      </Link>

    <form id="registrationForm" action="process_registration.php" method="POST">
    <h2>Create account</h2>
        <div className="form-group">
        <label for="username">Username:</label>
            <input 
            type="text" 
            id="username" 
            name="username"  
            placeholder='name' 
            value={formdata.username}
             onChange={handleInput} 
             required/>
        </div>
        
        <div className="form-group">
        <label for="Email">Email-id:</label>
           <input
            type="email"
             id="email"
              name="email" 
              placeholder='Email'
              value={formdata.email}
              onChange={handleInput} 
              required/>
        </div>
        <div className="form-group">
        <label for="Password">Password:</label>
            <input 
            type="password" 
            id="password" 
            name="password"
            placeholder='password'
            value={formdata.password}
            onChange={handleInput} 
            required/>
        </div>
        <div className="form-group">
        <label for="confirmPassword">confirmPassword:</label>
            <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            placeholder='conform-password'
            value={formdata.confirmPassword}
            onChange={handleInput} 
            required/>
        </div>
        <button type="submit">Register</button>
        <p >{formdata.username} You Have Suceesfully  created accont with this {formdata.email}</p>
    </form>
</div>
</div>
</>
)
}



export default SignIn