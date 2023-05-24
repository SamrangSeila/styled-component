import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import WelcomeLogo from '../components/WelcomeLogo'
import Body from '../component/Body'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <WelcomeLogo />
        <Body />
        <Footer />
    </div>
  )
}
export default Home