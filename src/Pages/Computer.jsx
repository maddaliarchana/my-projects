import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import {computerData} from '../assets/data/computers';
import { Link } from 'react-router-dom';

const Computer = () => {
  const uniqueArray = computerData.filter((orange12)=>(orange12.model))
  console.log(uniqueArray);
  
  //console.log(computerData);
  const [selectedproduct,setselectedproduct]=useState([])
  //  
  const companyHandler=(mango)=>{
    if(selectedproduct.includes(mango)){
      setselectedproduct(selectedproduct.filter(item=>item!==mango))

    }else{
      setselectedproduct([...selectedproduct, mango])
    }
  }
  // const PriceHandler=(price)=>{
  //   if(selectedproduct.includes(price)){
  //     setselectedproduct(selectedproduct.filter(item=>item!==price))

  //   }else{
  //     setselectedproduct([...selectedproduct, price])
  //   }
  //   alert(price)
  // }
  const filteredproduct= selectedproduct.length===0?
  computerData:computerData.filter((orange)=>selectedproduct.includes(orange.company))
  //computerData:computerData.filter((orange)=>selectedproduct.includes(orange.price))
  
  
  return (
    <>
    <Navbar/>
        <div className='container'>
          <div className='row'>
            <div className="col-2 ">
            <div className="pro-selected">
            <h3>Search based on Model</h3>
          {
          uniqueArray.map((compu)=>{
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
        {/* <div className="pro-selected">
            <h3> Price</h3>
          {
          uniqueArray.map((compu)=>{
            return(
              <div>
                
                <label>
                  <input type="checkbox" checked={selectedproduct.includes(compu.company)} onChange={()=>PriceHandler(compu.price)}/>
                </label>
                {compu.price}
                </div>
            )
          })}
          
        </div> */}
            </div>
            <div className="col-10 ">
              <div className='row'>
                    {filteredproduct.map((list)=>{
                  return(
                    
                <div className="card" style={{ width: "18rem" }}>
                  
                  <Link to={`/Computersingle/${list.id}`}>
                    <img src={list.image} className="card-img-top" alt={list.image} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">Company:{list.company}</h5>
                      <h6>Model: {list.model}</h6>
                      <h6>Price:{list.price}</h6>
                      
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

export default Computer


