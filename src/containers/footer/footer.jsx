import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg'

const redirect = 'https://discord.gg/Yr9EKZEKuJ';

export const footer = () => {
  return (
    <div className='Qsound__footer section__padding' id='footer'>
      <div className='Qsound__footer-heading'>
        <h1 className='gradient__text'>TEXT</h1>
      </div>

      <div className='Qsound__footer-links'>
        <div className='Qsound__footer-links_logo'>

          <img src={logo} alt="cookie :D" />
          <p>"BEST" Music bot</p>

        </div>

        <div className='Qsound__footer-links_div'>

          <h4>Info & Support</h4>
          <a href={redirect}>Discord Server</a>
          <Link to='/TOS' target='_blank'>Terms Of Service</Link>
          <Link to='/Privacy' target='_blank'>Privacy Policy</Link>
          
        </div>
      </div>
    </div>
  )
}

export default footer