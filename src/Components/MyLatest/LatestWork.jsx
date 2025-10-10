import React from 'react'
import latest from '../../Assets/latest';
import { useParams } from 'react-router-dom';
import LatestDisplay from '../WorkDisplay/LatestDisplay';

const LatestWork = () => {
  const {latestId} = useParams();
  const latests = latest.find((e)=> e.id === Number(latestId));

  return (
    <div>
      <LatestDisplay latests={latests}/>      
    </div>
  )
}

export default LatestWork
