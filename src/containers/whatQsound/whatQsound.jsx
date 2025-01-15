import React from 'react';
import './whatQsound.css';
import { Feature } from '../../components';

export const WhatQsound = () => {
  return (
    <div className='Qsound__whatQsound section__margin' id='whqs'>
      <div className='Qsound__whatQsound-feature'>
        <Feature title="What is Qsound" text="DESC TEXT"/>
      </div>
      <div className='Qsound__whatQsound-heading'>
        <h1 className='gradient__text'> TEXT </h1>
        <p>TEXT</p>
      </div>
      <div className='Qsound__whatQsound-container'>
        <Feature title="SOME EPIC FEATURE" text="EPIC YAPPING ABOUT THE FEATURE"/>
        <Feature title="SOME EPIC FEATURE" text="EPIC YAPPING ABOUT THE FEATURE"/>
        <Feature title="SOME EPIC FEATURE" text="EPIC YAPPING ABOUT THE FEATURE"/>
      </div>
    </div>
  )
}

export default WhatQsound