import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  
  {
    title: 'Text',
    text: 'text2'
  },

  {
    title: 'Text',
    text: 'text2'
  },

  {
    title: 'Text',
    text: 'text2'
  },

  {
    title: 'Text',
    text: 'text2'
  },
]

export const Features = () => {
  return (
    <div className='Qsound__features section__padding' id="features">
      <div className='Qsound__features-heading'>
        <h1 className='gradient__text'>Qsound In Action</h1>
        <p>Text</p>
      </div>
      <div className='Qsound__features-container'>
        {featuresData.map((item, index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features