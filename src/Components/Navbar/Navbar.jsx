import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import menu from '../../Assets/menu_icon.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className="logo">
        <p>Kinza Mehar</p>
      </div>
      <div className="list">
        <Link activeclass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenu'><p>About Me</p></Link>
        <Link activeclass='active' to='listings' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenu'><p>Contact Me</p></Link>
        <Link activeclass='active' to='footer' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenu'><p>Contacts</p></Link>
      </div>
      <div className='message'>
        <button activeclass='active' className='desktopMenuBtn' onClick={()=>{
          document.getElementById('footer').scrollIntoView({behavior: 'smooth'})
        }}>Contact Us</button>
      </div>


      <div className='nav-menu'>
        <div className='logo'>
          <p>Kinza M.</p>
        </div>
        <div className="nav-menu-list">
          <img src={menu} alt="" onClick={()=>{setShowMenu(!showMenu)}} />
          <div className='list' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeclass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuMob'><p>About Me</p></Link>
            <Link activeclass='active' to='listings' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuMob'><p>My Skills</p></Link>
            <Link activeclass='active' to='why-choose-us' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuMob'><p>My Services</p></Link>
            <Link activeclass='active' to='my-works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuMob'><p>My Works</p></Link>
            <Link activeclass='active' to='footer' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuMob'><p>Contacts</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
