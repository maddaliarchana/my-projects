import React from 'react'
  import logo from '../assets/images/logo1.jpeg'
 import logo1 from '../assets/images/logo.jpeg' 
import {mobileData} from '../assets/data/mobiles';


const mobile=mobileData.slice(0,5);
console.log(mobile);


const Landing = () => {

    //console.log(Computer);
    
  return (
    <>
<div className="container">
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
     {mobileData.map((list)=>{
      return(
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={list.id}
      aria-label="Slide 2"
    />
  )})}
    
  </div>
  <div className="carousel-inner container-fluid">
    <div className="carousel-item active">
      <img src={logo} className="d-block w-100" alt="..." />
    </div>
   
    
    {mobileData.map((list)=>{
      return(
        <div className="carousel-item">
        
      <img src={list.image} className=" fluid" alt={list.id} />
    
      </div>
     )})}
    
    
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
    </>
  )
}

export default Landing
