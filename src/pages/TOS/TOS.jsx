import React from 'react';
import './TOS.css'
import raw from '../../assets/Terms of Service Qsound.pdf'

export const TOS = () =>  {
  return (
    <div className='Qsound__tos'>
      <iframe src={raw}></iframe>
    </div>
  )
}

export default TOS