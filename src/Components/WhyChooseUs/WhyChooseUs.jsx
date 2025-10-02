import React from 'react'
import './WhyChooseUs.css'
import post from '../../Assets/post.png'
import banner from '../../Assets/banner.png'
import branding from '../../Assets/branding.png'


const WhyChooseUs = () => {
  return (
    <div id="why-choose-us">
      <div>
        <h4>My Services</h4>
      </div>
      <div className='services-grids'>
        <div className='grid'>
          <p>Social Media Post</p>
          <img src={post} alt="" />
        </div>
        <div className='grid'>
          <p>Business Cards/Banners</p>
          <img src={banner} alt="" />
        </div>
        <div className='grid'>
          <p>Branding Design</p>
          <img src={branding} alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
