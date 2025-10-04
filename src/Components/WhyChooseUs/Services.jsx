import React from 'react'
import './Services.css'
import post from '../../Assets/post.svg'
import banner from '../../Assets/banner.svg'
import branding from '../../Assets/branding.svg'


const Services = () => {
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

export default Services
