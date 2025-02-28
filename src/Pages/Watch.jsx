import React from 'react'
import { useState } from 'react'
import {watchData} from '../assets/data/watch';
import Navbar from '../components/Navbar';
import Footer from '../components/footer'
import { Link } from 'react-router-dom';

const Watch = () => {
  const [selectedproduct,setselectedproduct]=useState([])
    const companyHandler=(mango)=>{
      if(selectedproduct.includes(mango)){
        setselectedproduct(selectedproduct.filter(item=>item!==mango))
  
      }else{
        setselectedproduct([...selectedproduct, mango])
      }
    }
    const filteredproduct= selectedproduct.length===0?
    watchData:watchData.filter((orange)=>selectedproduct.includes(orange.model))
  return (
    <>
    <Navbar/>
        <div className='container'>
          <div className='row'>
            <div className="col-2 ">
            <div className="pro-selected">
          {watchData.map((compu)=>{
            return(
              <div>
                <label>
                  <input type="checkbox" checked={selectedproduct.includes(compu.company)} onChange={()=>companyHandler(compu.company)}/>
                </label>
                {compu.model}
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
                  <Link to={`/Watchsingle/${list.id}`}>
                    <img src={list.image} className="card-img-top" alt={list.image} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{list.model}{list.company}</h5>
                      
                    
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

export default Watch
