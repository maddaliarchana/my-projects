import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

const Login = () => {
  return (
   <>
   <Navbar/>
   <div className=" card m-5 p-5 center bg-black text-white"   >
        <form>
            <h3>Sign In</h3>
            <div className="mb-3">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
            />
            </div>
            <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
            />
            </div>
            <div className="mb-3">
            <div className="custom-control custom-checkbox">
                <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
                </label>
            </div>
            </div>
            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </div>
            <p className="forgot-password text-right">
            Forgot <a href="/forgotpassword">password?</a>
            </p>
      </form>
      </div>
    <Footer/>
   </>
  )
}
export default Login


    
