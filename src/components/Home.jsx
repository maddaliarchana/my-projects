import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Landing from './Landing';
import Collection from './Collection';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Landing/>
        <Collection/>
        <Footer/>
    </>
  )
}

export default Home
