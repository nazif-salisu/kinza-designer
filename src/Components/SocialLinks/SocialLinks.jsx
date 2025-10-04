import React from 'react'
import './SocialLinks.css'
import behance from '../../Assets/behance.png'
import facebook from '../../Assets/facebook.png'
import email from '../../Assets/email.png'

const SocialLinks = () => {
  return (
    <div id='social-links'>
      <h4>My Links</h4>
      <div className='social-link'>
        <img src={behance} alt="" />
        <h4>Kinza Designer | Behance</h4>
      </div>
      <div className='social-link'>
        <img src={facebook} alt="" />
        <h4>Kinza Designer | Facebook</h4>
      </div>
      <div className='social-link'>
        <img src={email} alt="" />
        <h4>Kinza Designer | Proton</h4>
      </div>
    </div>
  )
}

export default SocialLinks
