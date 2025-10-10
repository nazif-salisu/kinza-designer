import React from 'react'
import './MyLatest.css'
import { Link } from 'react-router-dom'

const MyLatest = (props) => {
  return (
    <div className='my-latest'>
      <div className="latest">
        <Link to={`/latest/${props.id}`}><img src={props.image} alt="" /></Link>
      </div>
    </div>
  )
}

export default MyLatest
