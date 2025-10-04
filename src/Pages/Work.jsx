import React from 'react'
import assets from '../Assets/assets'
import WorkDisplay from '../Components/WorkDisplay/WorkDisplay'
import { useParams } from 'react-router-dom';

const Work = () => {

  const {workId} = useParams();
  const work = assets.find((e)=> e.id === Number(workId));

  return (
    <div>
      <WorkDisplay work={work}/>      
    </div>
  )
}

export default Work
