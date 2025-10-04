import React from 'react'
import './MyWorks.css'
import { Link } from 'react-router-dom'

const MyWorks = (props) => {
  return (
    <div id='my-works'>
      <div className='works'>
        <div className="work">
          <Link to={`/work/${props.id}`}><img src={props.image} alt="" /></Link>
        </div>
      </div>
    </div>
  )
}

export default MyWorks
