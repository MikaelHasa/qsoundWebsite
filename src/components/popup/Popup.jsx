import React, { useRef } from 'react';
import './Popup.css';

import { X } from 'lucide-react';

function Popup({ onClose }) {

  const popupRef = useRef();

  const closePopup = (e) =>{
    if(popupRef.current === e.target){
      onClose();
    }
  }

  return (
    <div className='Qsound__popup section__padding' ref={popupRef} onClick={closePopup}>
      <div className='Qsound__popup-inner gradient__bg'>
        <button className='button-close' type='button' onClick={(onClose)}> <X /> </button>
        <div>
          <h1>Text</h1>
          <p>smol Text</p>
          <form action="">
            <input
              type="username/email"
              placeholder='Enter Your Username or Email address'
              required
            />
            <input
              type="password"
              placeholder='Password'
              required
            />
            <button className='button-login' type='button'>Log In</button>
            <button className='button-register' type='button'>Register</button>
          </form>
        </div>
      </div>
      <div className='Qsound__popup-smallscreen'>
        <button className='button-close' type='button' onClick={(onClose)}> <X /> </button>
        <iframe src={srcVideo} frameborder="0"/>
      </div>
    </div>
  )
}

export default Popup