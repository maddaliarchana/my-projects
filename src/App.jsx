import { useState } from 'react'
import { useContext } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

import Computer from './Pages/Computer';
import Ac from './Pages/Ac';
import Fridge from './Pages/Fridge';
import Kitchen from './Pages/Kitchen';
import Mobile from './Pages/Mobile';
import Watch from './Pages/Watch';
import MobileSingle from './Singles/MobileSingle';
import ComputerSingel from './Singles/ComputerSingel';
import Acsingle from './Singles/Acsingle';
import Watchsingle from './Singles/Watchsingle';
import Kitchensingle from './Singles/Kitchensingle';
import FridgeSingle from './Singles/FridgeSingle';
import UserCart from './UserCart';
 import Login from './components/Login';
import Signup from './components/Signup';
import Forgot from './components/Forgot';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Computer" element={<Computer/>}/>
      <Route path="/Ac" element={<Ac/>}/>
      <Route path="/Fridge" element={<Fridge/>}/>
      <Route path="/Kitchen" element={<Kitchen/>}/>
      <Route path="/Mobile" element={<Mobile/>}/>
      <Route path="/Watch" element={<Watch/>}/>


      {/* dynamic routing */}

      <Route path='/Mobilesingle/:id' element={<MobileSingle/>}/>
      <Route path='/Computersingle/:id' element={<ComputerSingel/>}/>
      <Route path='/Acsingle/:id' element={<Acsingle/>}/>
      <Route path='/Fridgesingle/:id' element={<FridgeSingle/>}/>
      <Route path='/Kitchensingle/:id' element={<Kitchensingle/>}/>
      <Route path='/Watchsingle/:id' element={<Watchsingle/>}/>
      
      {/* cart */}
      <Route path='/cart' element={<UserCart/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgotpassword' element={<Forgot/>}/>
      </Routes>
    </>
  )
}

export default App
