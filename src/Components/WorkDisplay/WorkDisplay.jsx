import React from 'react'

const WorkDisplay = (props) => {
  const {work} = props
  return (
    <div>
      <img src={work.image} alt="" />
    </div>
  )
}

export default WorkDisplay
