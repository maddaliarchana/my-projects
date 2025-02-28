import React from 'react'
import { useState } from 'react'
import {fridgeData} from '../assets/data/fridge';
import Footer from '../components/footer'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Fridge = () => {
  const [selectedproduct,setselectedproduct]=useState([])
    const companyHandler=(mango)=>{
      if(selectedproduct.includes(mango)){
        setselectedproduct(selectedproduct.filter(item=>item!==mango))
  
      }else{
        setselectedproduct([...selectedproduct, mango])
      }
    }
    const filteredproduct= selectedproduct.length===0?
    fridgeData:fridgeData.filter((orange)=>selectedproduct.includes(orange.brand))
  return (
    <>
    <Navbar/>
        <div className='container'>
          <div className='row'>
            <div className="col-2 ">
            <div className="pro-selected">
          {fridgeData.map((compu)=>{
            return(
              <div>
                <label>
                  <input type="checkbox" checked={selectedproduct.includes(compu.brand)} onChange={()=>companyHandler(compu.brand)}/>
                </label>
                {compu.brand}
                </div>
            )
          })}
        </div>
            </div>
            <div className="col-10 ">
              <div className='row'>
                    {filteredproduct.map((list)=>{
                  return(
                    
                <div className="card" style={{ width: "18rem" }}>
                  <Link to={`/Fridgesingle/${list.id}`}>
                    <img src={list.image} className="card-img-top" alt={list.image} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{list.model}{list.brand}</h5>
                      
                     
                    </div>
                  </div>
              )})}
            </div>
            </div>
          </div>
        </div>
    <Footer/>
    </>
  )
}

export default Fridge
