import React from 'react'
import images from '../../constants/images'
import './Forgot.css';
import {Link} from 'react-router-dom';

function Forgot() {
  return (
    <>
      <div className='forgot'>
        <div className='forgot-img'>
          <img src={images.forgot} alt="" />
        </div>
        <div className='forgot-title'>
          <div className='forgot-title-header'>
            <h1>Forgot Password</h1>
            <div className='forgot-title-header-bot'>
            <p>Enter your email and we'll send you a link to</p>
            <p>reset your password</p>
            </div>
          </div>
          <div className='forgot-title-input'>
            <form action="" className='form'>
              <div className='form-input'>
                <span className='icon'><i class="far fa-envelope"></i></span>
                <input type="email" name='email' placeholder='Email' />
              </div>
            </form>
          </div>
          <div className='forgot-title-footer'>
            <div className='forgot-title-footer-button'>
              <button>Send</button>
            </div>
            <p>Back to <Link to='/login'style={{textDecoration: 'none'}}><span>Login</span></Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forgot