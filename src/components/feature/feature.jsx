import React from 'react';
import './feature.css';

export const feature = ({ title, text }) => {
  return (
    <div className='Qsound__features-container__feature'>
      <div className='Qsound__features-container__feature-title'>
        <div />
          <h1>{title}</h1>
      </div>
      <div className='Qsound__features-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default feature