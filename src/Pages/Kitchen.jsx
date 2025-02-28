import React from 'react'
import { useState } from 'react'
import {kitchenData} from '../assets/data/kitchen';
import Navbar from '../components/Navbar';
import Footer from '../components/footer'
import { Link } from 'react-router-dom';


const Kitchen = () => {
  const [selectedproduct,setselectedproduct]=useState([])
    const companyHandler=(mango)=>{
      alert("brand"+mango)
    
      
      if(selectedproduct.includes(mango)){
        setselectedproduct(selectedproduct.filter(item=>item!==mango))
        alert(mango+"if")
        console.log(item);

  
      }else{
        setselectedproduct([...selectedproduct, mango])
        alert(mango+"else")
        
      }
    }
    const filteredproduct= selectedproduct.length===0?
    kitchenData:kitchenData.filter((orange)=>selectedproduct.includes(orange.company))
  return (
    <>
    <Navbar/>
        <div className='container'>
          <div className='row'>
            <div className="col-2 ">
            <div className="pro-selected">
          {kitchenData.map((compu)=>{
            return(
              <div>
                <label>
                  <input type="checkbox" checked={selectedproduct.includes(compu)} onChange={()=>companyHandler(compu.brand)}/>
                </label>
                {(compu.brand)}
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
                  <Link to={`/Kitchensingle/${list.id}`}>
                    <img src={list.image} className="card-img-top" alt={list.image} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">Model: {list.model}</h5>
                     <h6>Brand:  {list.brand}</h6>
                     
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

export default Kitchen
