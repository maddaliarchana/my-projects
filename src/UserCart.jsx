import React from 'react'
import {useCart} from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/footer'


const UserCart = () => {
    const {cartItems,addToCart,removeFromCart}=useCart()
  return (
    <>
     <Navbar />
     
     
<div class="container">
    <h2 className='center'>Your Cart</h2>
 {cartItems.length ===0 ?
    (<p className='text-danger'>Your Cart is Empty</p> ): 
   <div class="row">
     {cartItems.map((item)=>{
        return(
            <div className="card" >
            
                <div className="cart-body">
                    <div className="row p-3">
                        <div className="col">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="col">
                            <h4>Product:{item.product}  {item.model}</h4>
                            <h4>Price:  {item.price}  </h4>
                        </div>
                        <div className="col p-5">
                            <button className='btn btn-primary' onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                                         
                    </div>
                </div>
                
            </div>
        )
    })}
   </div>

}
     
    </div>
    <Footer/>
</> 
  )
}

export default UserCart
