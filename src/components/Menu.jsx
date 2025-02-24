import React from 'react'
import logo from '../assets/images/logo.jpeg'
import { Link } from 'react-router-dom'
import {computerData} from '../assets/data/computers';
const Menu = () => {
  return (
    <>
        <nav class="navbar  bg-secondary-subtle ">
            <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
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
                
                
            </div>
        </nav>
    </>
  )
}

export default Menu
