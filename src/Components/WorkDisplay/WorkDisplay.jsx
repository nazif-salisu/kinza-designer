import React from 'react'
import './WorkDisplay.css'

const WorkDisplay = (props) => {
  const {work} = props
  return (
    <div className='work-display'>
      <img src={work.image} alt="" />
    </div>
  )
}

export default WorkDisplay
