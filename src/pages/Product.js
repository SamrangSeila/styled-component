import React from 'react'
import ProductCarousal from '../component/ProductCarousal';
import Navbar from '../components/Navbar';
import Body from '../component/Body';
import Footer from '../component/Footer';
import ProductWelcome from '../components/ProductWelcome';
const Product = () => {
  return (
    <div>
    <Navbar />
      <ProductCarousal />
      <ProductWelcome />
      <Body />
     
      <Footer />
    </div>
  )
}

export default Product
