import React, { useContext, useRef, useState } from 'react'
import './Navbar.css' 

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar = () => {

const[menu,setMenu] = useState("shop");
const {getTotalCartItems}= useContext(ShopContext);
const menuRef = useRef();

const dropdown_toggle = (e) =>{
     menuRef.current.classList.toggle('nav-menu-visible');
     e.target.classList.Toggle('open');
}

  return (
    <div className='navbar'>
      <div div className="nav-logo">  
        <img src={logo} alt="logo picture"/>
        <p>Njiku Fashion</p>
      </div >
      <img className='nav-dropdown' onclick={dropdown_toggle} src={nav_dropdown} alt="" />
       <ul ref={menuRef} className="nav-menu">
        <li onclick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
        <li onclick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<h/>:<></>}</li>
        <li onclick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<h/>:<></>}</li>
        <li onclick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<h/>:<></>}</li>
       </ul>
       <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to='/login'><button>Login</button></Link>} 
        <Link to='/cart'><img src={cart_icon} alt="cart icon missing"/></Link>
         <div className="nav-cart-count">{getTotalCartItems()}</div>
       </div>
    </div>
  )
}

export default Navbar
