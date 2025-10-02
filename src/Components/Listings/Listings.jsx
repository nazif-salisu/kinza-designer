import React from 'react'
import './Listings.css'
import car1 from '../../Assets/AI.png'
import car2 from '../../Assets/canva.png'
import car3 from '../../Assets/PS.png'


const Listings = () => {
  return (
    <div id="listings">
      <div className="header">
        <h4>My Skills</h4>
      </div>
      <div className="list-grids">
        <div className="grid">
          <img src={car1} alt="" />
        </div>
        <div className="grid">
          <img src={car2} alt="" />
        </div>
        <div className="grid">
          <img src={car3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Listings
