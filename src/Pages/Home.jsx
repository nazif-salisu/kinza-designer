import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Designs from '../Components/Designs/Designs'
import Footer from '../Components/Footer/Footer'
import AboutMe from '../Components/AboutMe/AboutMe'
import SocialLinks from '../Components/SocialLinks/SocialLinks'
import Services from '../Components/WhyChooseUs/Services'
import Latest from '../Components/MyLatest/latest'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <SocialLinks/>
      <Services/>
      <Latest/>
      <Designs/>
      <Footer/>
    </div>
  )
}

export default Home
