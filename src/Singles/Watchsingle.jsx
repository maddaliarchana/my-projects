import React from 'react'
import {useParams} from 'react-router-dom';
import {watchData} from '../assets/data/watch';
import Navbar from '../components/Navbar';
import Footer from '../components/footer'
import {useCart} from '../context/CartContext'

const Watchsingle = () => {
    const {id}= useParams()
    const product =watchData.find((item)=>item.id==id)
     const{addToCart, cartItems}=useCart()
    console.log(id);
    console.log(watchData);
  return (
    <>
    <Navbar/>
    <div className='container pt-3 mt-4'>
      <div className='row'>
        <div className='col'>
            <div className="card" style={{ width: "18rem" }}>
          
              <img src={product.image} className="card-img-top" alt={product.id} />
          
            </div>
        </div>
        <div className='col'>
            <div className="card-body">
              <h4 className="card-title">{product.model}</h4>
              <h5>category:{product.category}</h5>
              <div><h5>Price:</h5>{product.price}</div>
              <h5>Company:{product.company}</h5>
              <h5>model:{product.model}</h5>
              
              <p className="card-text">Description:
              {product.description}
              </p>
          </div>
          </div>
          <div className='col'>
              
              <button onClick={()=>addToCart(product)} className="btn btn-primary">
                Add to cart
              </button>
            </div>  
       
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default Watchsingle
