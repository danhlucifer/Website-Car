import React from 'react';
import images from '../../constants/images';
import './Login.css';
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
      <div className='login'>
        <div className='login-img'>
          <img src={images.login} alt="" />
        </div>
        <div className='login-title'>
          <div className='login-title-input'>
            <div className='login-title-input-header'>
              <h1>Login</h1>
              <div className='login-title-input-header-img'>
                <img src={images.logo} alt="" style={{ width: 53.23, height: 60 }} />
              </div>
            </div>
            <div className='login-title-input-list'>
              <div className='login-title-input-list-container'>
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
              </div>
              <div className='login-title-input-list-forgot'>
                <Link to='/forgot' style={{textDecoration: 'none'}}><p>Forgot Password</p></Link>
              </div>
              <div className='login-title-input-list-item'>
                <div className='login-title-input-list-item-fb'>
                  <img src={images.fbIcon} alt="" style={{ width: 30, height: 30 }} />
                  <p>Login with Facebook</p>
                </div>
                <div className='login-title-input-list-item-gg'>
                  <img src={images.googleIcon} alt="" style={{ width: 30, height: 30 }} />
                  <p>Login with Google</p>
                </div>
              </div>

              <div className='login-title-input-list-footer'>
                <div className='login-title-input-list-footer-button'>
                  <button>Login</button>
                </div>
                <div className='login-title-input-list-footer-text'>
                  <p>Don't have an account ? <Link to='/signup' style={{textDecoration: 'none'}}><span>Signup</span></Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className='login-title-sub'>
            <img src={images.subLogin} alt="" style={{ width: 300, height: 600 }} />
          </div>
        </div>

      </div>
    </>

  )
}

export default Login