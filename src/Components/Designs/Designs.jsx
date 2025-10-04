import React from 'react'
import './Designs.css'
import designs from '../../Assets/assets'
import Works from '../MyWorks/MyWorks'

const Designs = () => {
  return (
    <div id='my-work'>
      <div>
        <h4>My Designs</h4>
      </div>
      <div className='work'>
        {designs.map((item,i) =>{
          return <Works key={i} id={item.id} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default Designs
