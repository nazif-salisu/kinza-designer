import React from 'react'
import './Hero.css'
import hero from '../../Assets/hero1.png'

const Hero = () => {
  return (
    <div id="hero">
      <div className='hero-left'>
        <div className='hero-left-desc'>
          <p>I am a professional and creative graphic designer with 2 years <br/> of experience in freelancing. I specialize in designing eye-catching <br/> social media posts and attractive thumbnails, along with other digital <br/> graphics that help brands grow. My focus is always on delivering <br/> high-quality, engaging, and unique designs that not only look good <br/> but also connect with the audience. As a freelancer, I believe in creativity <br/> with professionalism — every design I create reflects passion, <br/> originality, and attention to detail.</p>
        </div>
        <div className='name'>
          <h1>KINZA MEHAR</h1>
        </div>
        <div className='contact'>
          <a style={{textDecoration: 'none', color: '#fff'}} href='https://kinzadesigner@proton.me'><p>Contact Me</p></a>
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero} alt="" />
        <i>"Helping you grow your brand with stunning visuals."</i>
      </div>

      <div id='hero-mobile'>
        <div className='hero-right-mobile'>
          <img src={hero} alt="" />
          <div className='name'>
            <h1>KINZA MEHAR</h1>
            <i>"Helping you grow your brand with stunning visuals."</i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
