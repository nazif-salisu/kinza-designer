import React from 'react'
import './Footer.css'
import facebook from '../../Assets/facebook.svg'
import behance from '../../Assets/behance.svg'
import email from '../../Assets/email.svg'


const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div id='footer'>
      <div className='socials'>
        <a style={{textDecoration: 'none', color: '#fff'}} href='https://www.facebook.com/share/17GKDWoFm1/'><div>
          <img src={facebook} alt="" />
          <p>Facebook</p>
        </div></a>
        <a style={{textDecoration: 'none', color: '#fff'}} href='https://www.behance.net/kinzadesigner'><div>
          <img src={behance} alt="" />
          <p>Behance</p>
        </div></a>
        <a style={{textDecoration: 'none', color: '#fff'}} href='https://kinzadesigner@proton.me'><div>
          <img src={email} alt="" />
          <p>E-mail</p>
        </div></a>
      </div>
      <div className='copyright'>
        <p>&copy; {date} All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
