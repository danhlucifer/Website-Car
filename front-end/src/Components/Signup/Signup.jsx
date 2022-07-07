import React from 'react';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
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

          <div className='signup-title-input'>
            <div className='signup-title-input-header'>
              <h1>Sign Up</h1>
              <div className='signup-title-input-header-img' style={{width: 80,height:80}}>
                <img src={images.userIcon} alt="" />
                
              </div>
              <div className='img-plus'><i class="fas fa-arrow-alt-down"></i></div>
            </div>
            <div className='signup-title-input-container'>
              <form action="" className='form'>
                <div className='form-input'>
                  <span className='icon'><i class="fal fa-user"></i></span>
                  <input type="text" name='username' placeholder='User Name'/>
                </div>
              </form>
              <form action="" className='form'>
                <div className='form-input'>
                  <span className='icon'><i class="far fa-envelope"></i></span>
                  <input type="email" name='email' placeholder='Email' />
                </div>
              </form>
              <form action="" className='form'>
                <div className='form-input'>
                  <span className='icon'><i class="far fa-lock"></i></span>
                  <input type="password" name='password' placeholder='Password'/>
                </div>
              </form>
              <form action="" className='form'>
                <div className='form-input'>
                  <span className='icon'><i class="far fa-lock"></i></span>
                  <input type="password" name='password' placeholder='Confirm Password'/>
                </div>
              </form>
            </div>
            <div className='signup-title-input-footer'>
              <div className='signup-title-input-footer-button'>
                <button>Register</button>
              </div>
              <div className='signup-title-input-footer-text'>
                <p>Already have an account ? <Link to='/login'style={{textDecoration: 'none'}}><span>Login</span></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup