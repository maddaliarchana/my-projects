import React, { useContext } from 'react'
import { useState, createContext } from 'react'




 const CartContext=createContext()

    export const CartProvider=({children})=>{
        const [cartItems, setCartItems]=useState([])

        const addToCart=(item)=>{
            // alert(item)
            // console.log(item)
            
            setCartItems([...cartItems,item])
        }
    const removeFromCart=(item)=>{
        setCartItems(cartItems.filter((apple)=>apple!==item))

    }

    


  return (
   <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
    {children}
   </CartContext.Provider>
)
    }
    export const useCart=()=>{
        return useContext(CartContext)
    }



export default CartContext
