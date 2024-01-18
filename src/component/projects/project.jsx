import React from 'react'
import './projects.css'

import forum from '../../assets/evangadiforum.png'
import netflix from '../../assets/netflix.png'
import amazone from '../../assets/Amazone.PNG'
import ForumDescription from '../forum/ForumDescription'
import NetflixCloneDescription from '../netflix/NetflixCloneDescription'
import AmazonCloneDescription from '../amazone/AmazonCloneDescription'
function project() {
  return (
    <div className='project'>
      <NetflixCloneDescription />
       <img className='netflix'src={netflix} />
<AmazonCloneDescription />
       <img className='amazone'src={amazone} />

      <ForumDescription />
      
      
      <img className='bg-fine'src={forum} />
     
      
      
      
      
      
  </div>
  )
}

export default project