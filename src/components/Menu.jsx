import React from 'react'
import logo from '../assets/images/logo.jpeg'
import { Link } from 'react-router-dom'
import {computerData} from '../assets/data/computers';
const Menu = () => {
  return (
    <>
        <nav class="navbar  bg-secondary-subtle ">
            <div class="container-fluid">
                
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav"></div>
           
                <Link class="navbar-brand text-black" to="/computer">
                Computers
                </Link>
                <Link class="navbar-brand text-black" to="/Ac">
                Ac
                </Link>
                <Link class="navbar-brand text-black" to="/Fridge">
                Fridge
                </Link>
                <Link class="navbar-brand text-black" to="/Kitchen">
                Kitchen
                </Link>
                <Link class="navbar-brand text-black" to="/Mobile">
                Mobile
                </Link>
                <Link class="navbar-brand text-black" to="/Watch">
                Watch
                </Link>
                <Link class="navbar-brand text-black" to="/Watch">
                Women Fashion
                </Link>
                <Link class="navbar-brand text-black" to="/Watch">
                Tv
                </Link>
                <Link class="navbar-brand text-black" to="/Watch">
                Speaker
                </Link>
                <Link class="navbar-brand text-black" to="/Watch">
                Men Fashion
                </Link>
                <Link class="navbar-brand text-black" to="/Watch">
                Book
                </Link>
                <Link class="navbar-brand text-black nav-item nav-link" to="/Watch">
                Furniture
                </Link>
                </div>
               
                
            </div>
        </nav>
    </>
  )
}

export default Menu
