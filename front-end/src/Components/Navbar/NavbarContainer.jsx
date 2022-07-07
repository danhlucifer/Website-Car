import React from 'react';
import images from '../../constants/images';
import './NavbarContainer.css';
import {Link} from 'react-router-dom'

function NavbarContainer() {
    return (
        <>
            <div className='Navbar'>
                <div className='Navbar-container'>
                    <div className='Navbar-logo'>
                        <img src={images.logo} alt="" />
                    </div>
                    <div className='Navbar-list'>
                        <ul>
                            <Link to='/home' className='link'><li>Home</li></Link>
                            <Link to='/product' className='link'><li>Product</li></Link>                          
                            <Link to='/aboutUs' className='link'><li>About Us</li></Link>
                            <Link to='/contactus' className='link'><li>Contact Us</li></Link>
                        </ul>
                    </div>
                    <Link to='/login' className='Navbar-account'>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default NavbarContainer