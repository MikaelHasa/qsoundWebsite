import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Popup } from '..';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () =>(
  <>
  <p><a href="#whqs">   What is Qsound </a></p>
  <p><a href="#features"> Features </a></p>
  <p><a href="#footer"> Resources </a></p>
  </>
)

export const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  

  return (
    <div className='Qsound__navbar'>
      <div className='Qsound__navbar-links'>
        <div className='Qsound__navbar-links_logo'>
          <img src={logo}
          alt="logo" />
        </div>
        <div className='Qsound__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='Qsound__navbar-sign'>
        <p>Sign in</p>
        <button type='button' onClick={() => setButtonPopup(true)}>Discord Login</button>
        {buttonPopup && <Popup onClose={() => setButtonPopup(false)}/>}
      </div>
      <div className='Qsound__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='Qsound__navbar-menu_container scale-up-center'>
            <div className='Qsound__navbar-menu_container-links'>
              <Menu />
              <div className='Qsound__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button' onClick={() => setButtonPopup(true)}>Discord Login</button>
                {buttonPopup && <Popup onClose={() => setButtonPopup(false)}/>}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar