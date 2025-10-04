import React from 'react'
import './Hero.css'
import hero from '../../Assets/hero2.png'

const Hero = () => {
  return (
    <div id="hero">
      <div className='name'>
        <h4>Kinza Mehar</h4>
      </div>
      <div className='hero'>
        <img src={hero} alt="" />
      </div>
      <div className='title'>
        <h1>Graphic Designer</h1>
      </div>
      <div className='desc'>
        <p>"Helping you grow your brand with stunning visuals."</p>
      </div>
    </div>
  )
}

export default Hero
