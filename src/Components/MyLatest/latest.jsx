import React from 'react'
import './Latest.css'
import latest from '../../Assets/latest'
import MyLatest from './MyLatest'

const Latest = () => {
  return (
    <div className='myLatest'>
      <h4>My Latest Designs</h4>
      <div className='latest'>
        {latest.map((item,i)=>{
          return <MyLatest key={i} id={item.id} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default Latest
