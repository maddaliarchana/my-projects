import React from 'react'
import Menu from './Menu'
import logo from '../assets/images/logo1.jpeg'

const Navbar = () => {
  return (
    <>
        
        <nav className='navbar  navbar-expand-lg bg-black bg-gradient'>
        <div class="container-fluid">
            <a href="#">
                <img src={logo} alt="logo" width="100" height="60" className='p-2'/>
            </a>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

        </div>
        </nav>
        <Menu/>
    </>
  )
}

export default Navbar
