import React from 'react'
import './MyWorks.css'
import work_1 from '../../Assets/work_1.jpg'
import work_2 from '../../Assets/work_2.jpg'
import work_3 from '../../Assets/work_3.jpg'

const MyWorks = () => {
  return (
    <div id='my-works'>
      <div>
        <h4>My Works</h4>
      </div>
      <div className='works'>
        <div className="work">
          <img src={work_1} alt="" />
        </div>
        <div className="work">
          <img src={work_2} alt="" />
        </div>
        <div className="work">
          <img src={work_3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MyWorks
