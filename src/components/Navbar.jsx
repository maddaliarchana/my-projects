import React from 'react'
import Menu from './Menu'
import logo from '../assets/images/logo1.jpeg'
import { Link } from 'react-router-dom'
import { geolocated } from "react-geolocated";
import {useCart} from '../context/CartContext';


const Navbar = () => {
  const {cartItems}=useCart()

  

  return (
    <>
        
        <nav className='navbar  navbar-expand-lg bg-black bg-gradient'>
        <div class="container-fluid">
           
            <Link to="/">
                <img src={logo} alt="logo" width="100" height="60" className='p-2'/>
            </Link>
            <div className='text-white'> Deliver to India<i class="bi bi-lock"></i></div>
           
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
           
              <Link to="/cart">cart
              <span classname="text-white">
                {cartItems.length}
              </span>
              </Link>
              
            
              <Link to="/login">Login</Link>
            
              <Link to="/signup">Signup</Link>
            

        </div>
        </nav>
        <Menu/>
    </>
  )
}

export default Navbar
