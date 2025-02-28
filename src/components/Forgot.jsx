import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

const Forgot = () => {
  return (
    <>
    <Navbar/>
    <div className=" card m-5 p-5 center bg-black text-white"   >
         <form>
             <h3>Forgot Password</h3>
             <div className="mb-3">
             <label>Email address</label>
             <input
                 type="email"
                 className="form-control"
                 placeholder="Enter email"
             />
             </div>
            
             
             <div className="d-grid">
             <button type="submit" className="btn btn-primary">
                 Submit
             </button>
             </div>
            
       </form>
       </div>
     <Footer/>
    </>
  )
}

export default Forgot
