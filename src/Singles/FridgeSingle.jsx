import React from 'react'
import {useParams} from 'react-router-dom';
import {fridgeData} from '../assets/data/fridge';
import Footer from '../components/footer'
import Navbar from '../components/Navbar';
import {useCart} from '../context/CartContext'


const FridgeSingle = () => {
    const {id}= useParams()
    const product =fridgeData.find((item)=>item.id==id)
     const{addToCart, cartItems}=useCart()
    console.log(id);
    console.log(fridgeData);
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
              <h4 className="card-title">{product.model}<h5>{product.brand}</h5></h4>
              <h5>category:{product.category}</h5>
              <div><h5>Price:</h5>{product.price}</div>
              <h5>Company:{product.company}</h5>
              <h5>model:{product.model}</h5>
              <h5>Product:{product.product}</h5>
              
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

export default FridgeSingle
