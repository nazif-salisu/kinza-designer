import React from 'react'
import './SocialLinks.css'
import behance from '../../Assets/behance.svg'
import facebook from '../../Assets/facebook.svg'
import email from '../../Assets/email.svg'
import ig from '../../Assets/instagram.svg'

const SocialLinks = () => {
  return (
    <div id='social-links'>
      <h4>My Links</h4>
      <a style={{textDecoration: 'none', color: '#fff'}} href='https://www.behance.net/kinzadesigner'><div className='social-link'>
        <img src={behance} alt="" />
        <h4>Kinza Designer | Behance</h4>
      </div></a>
      <a style={{textDecoration: 'none', color: '#fff'}} href='https://www.facebook.com/share/17GKDWoFm1/'><div className='social-link'>
        <img src={facebook} alt="" />
        <h4>Kinza Designer | Facebook</h4>
      </div></a>
      <a style={{textDecoration: 'none', color: '#fff'}} href='https://kinzadesigner@proton.me'><div className='social-link'>
        <img src={email} alt="" />
        <h4>Kinza Designer | Proton</h4>
      </div></a>
      <a style={{textDecoration: 'none', color: '#fff'}} href='https://www.instagram.com/designer_kinza/'><div className='social-link'>
        <img src={ig} alt="" />
        <h4>Kinza Designer | Instagram</h4>
      </div></a>
    </div>
  )
}

export default SocialLinks
