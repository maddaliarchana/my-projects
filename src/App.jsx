import { useState } from 'react'
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
      </Routes>
    </>
  )
}

export default App
