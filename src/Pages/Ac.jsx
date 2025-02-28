import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import {acData} from '../assets/data/Ac'

import { Link } from 'react-router-dom'
import Footer from '../components/footer'

const Ac = () => {
  const [selectedproduct,setselectedproduct]=useState([])
    const companyHandler=(mango)=>{
      if(selectedproduct.includes(mango)){
        setselectedproduct(selectedproduct.filter(item=>item!==mango))
  
      }else{
        setselectedproduct([...selectedproduct, mango])
      }
    }
    const filteredproduct= selectedproduct.length===0?
    acData:acData.filter((orange)=>selectedproduct.includes(orange.company))
  return (
    <>
    <Navbar/>
        <div className='container'>
          <div className='row'>
            <div className="col-2 ">
            <div className="pro-selected">
          {acData.map((compu)=>{
            return(
              <div>
                <label>
                  <input type="checkbox" checked={selectedproduct.includes(compu.company)} onChange={()=>companyHandler(compu.company)}/>
                </label>
                {compu.company}
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
                  <Link to={`/Acsingle/${list.id}`}>
                    <img src={list.image} className="card-img-top" alt={list.image} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{list.model}</h5>
                      <h6>Company:  {list.company}</h6>
                      
                     
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

export default Ac
