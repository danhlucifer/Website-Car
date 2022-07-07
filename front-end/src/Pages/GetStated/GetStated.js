import React from 'react';
import images from '../../constants/images';
import './GetStated.css';
import { Link } from 'react-router-dom'

function GetStated() {
    return (
        <div className='GetStated'>
            <div className='GetStated-page'>
                <div className='GetStated-page-img'>
                    <img src={images.getstatedImage} alt="" />
                </div>
                <div className='GetStated-page-title'>
                    <h1>Expect the Unexpected</h1>
                    <Link to='/home'>
                        <button>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GetStated