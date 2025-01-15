import React from 'react';
import './header.css';

import mainImg from '../../assets/mainscreen.png'

export const Header = () => {

  const background = {
    backgroundImage: `url(${mainImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '50px 30px',
  };

  const redirect = 'https://discord.com/oauth2/authorize?client_id=1269784447515889734';

  return (
    <div className='QSound__header section__padding' id='home' style={background}>
      <div className='Qsound__header-content'>

        <h1 className='gradient__text'>
          {'Qsound \n Future Of \n Experience'}
        </h1>
        <p>A DISCORD BOT WITH SOUND QUALITY AS THE MAIN PRIORITY</p>

        <div className='Qsound__header-content__redirect'>
          <a href={redirect} target='_blank'>
          <button type='button'>Get Started</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header