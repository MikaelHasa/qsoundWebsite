import React from 'react';
import './Privacy.css'
import raw from '../../assets/Privacy.pdf';

export const Privacy = () => {
  return (
    <div className='Qsound__privacy'>
      <iframe src={raw}></iframe>
    </div>
  )
}

export default Privacy