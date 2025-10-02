import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Listings from '../Components/Listings/Listings'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import MyWorks from '../Components/MyWorks/MyWorks'
import Footer from '../Components/Footer/Footer'
import AboutMe from '../Components/AboutMe/AboutMe'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Listings/>
      <WhyChooseUs/>
      <MyWorks/>
      <Footer/>
    </div>
  )
}

export default Home
