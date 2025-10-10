import React from 'react'
import './LatestDisplay.css'

const LatestDisplay = (props) => {
  const {latests} = props
  
  return (
    <div className='latest-display'>
      <div className="display">
        <img src={latests.image} alt="" />
      </div>
    </div>
  )
}

export default LatestDisplay
