import React from 'react'
import "./Navbar.css"
import { useState } from 'react';
import {Link} from  'react-router-dom';
import { useLocation } from 'react-router-dom';
export  const Navbar = () => {
  const [hiddeSign, setHidde] = useState(false)
  const location = useLocation(); 
  return (
    
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <Link to="/" class="navbar-brand" >Fitness</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse w-100" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" exact class="nav-link" aria-current="page" >Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/a" class="nav-link" >Marketplace</Link>
          </li>
          <li class="nav-item">
            <Link to="/b" class="nav-link" >Health</Link>
          </li>
          <li class="nav-item">
            <Link to="/c" class="nav-link" >Aboutus</Link>
          </li>
          
          
        </ul>
        
        <div className="ms-auto d-flex ">
          
        {location.pathname === '/' && (
        <button class="btn btn-outline-dark login" onClick={()=>{setHidde(!hiddeSign)}}>SIGN IN</button>
      )}
  
        </div>
    
      </div>
      
    </div>
   
  
   
    <div className={ hiddeSign  ? "sign-up" : "hidde-sign"} >
      <div id="popup-container">
  <form class='sign-up-items' id="signin-form">
    <div className="hide-sign-up">
      <button type="button" class="btn-close" aria-label="Close" onClick={()=>{setHidde(!hiddeSign)}}></button>
    </div>
    <h2>SIGN IN</h2>
    <label for="username">Email :</label>
    <input type="email" id="username" name="username" placeholder='Example@gmail.com' />
    <br />
    <label for="password">Password :</label>
    <input type="password" id="password" name="password" placeholder='Password' required/>

    <div id='check-box'>
      <input type="checkbox" id='check-bx'/> I Accept the Privacy Policy <br />
      <input type="checkbox" id='check-bx'/> I Accept the Cookies
    </div>
    
    <input type="submit" value="Sign In" />
  </form>
  </div>
</div>
   

  
 
    
  </nav>
  )
}
