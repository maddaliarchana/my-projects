import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import {computerData} from '../assets/data/computers';

const Computer = () => {
  console.log(computerData);
  
  return (
    <>
    <Navbar/>
    <div className='container row gap-3 mx-auto'>
    {computerData.map((list)=>{
    return(

      <div className="card" style={{ width: "18rem" }}>
          <img src={list.image} className="card-img-top" alt={list.image} />
          <div className="card-body">
            <h5 className="card-title">{list.model}{list.price}</h5>
            <p className="card-text">
             {list.description}
            </p>
            <a href="#" className="btn btn-primary">
              Add to list
            </a>
          </div>
        </div>
    )})}
        </div>

    <Footer/>
    </>
  )
}

export default Computer
