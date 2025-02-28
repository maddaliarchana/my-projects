import React from 'react'
import {watchData} from '../assets/data/watch';
import {mobileData} from '../assets/data/mobiles';
import {kitchenData} from '../assets/data/kitchen';
import {acData} from '../assets/data/Ac'

const Collection = () => {
  const watch=watchData.slice(0,5);
  // const mobile=mobileData.slice(0,5);
  // const kitchen=kitchenData.slice(0,5);
  // const ac=acData.slice(0,5);
  return (
    <>
        <div classname="container">
          <div className="row">
          {watch.map((item)=>{
        return(
            <div className="card" style={{ width: "18rem" }}>
            
                <div className="cart-img">
                    <img src={item.image} alt="" />
                </div>
               
            </div>
          )})}
            </div>
          </div>
        
        
    </>
  )
}

export default Collection
