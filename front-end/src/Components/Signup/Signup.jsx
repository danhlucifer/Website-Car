import React from 'react';
import images from '../../constants/images';
import './Signup.css';

function Signup() {
  return (
    <>
      <div className='signup'>
        <div className='signup-img'>
          <img src={images.signup} alt="" />
        </div>
        <div className='signup-title'>
          <div className='signup-title-sub'>
            <img src={images.subSignup} alt="" style={{ width: 300, height: 600 }}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup