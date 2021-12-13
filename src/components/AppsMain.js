import React from 'react';
import image from '../images/np-hero-image.png';
import './Apps.css';

const AppsMain = () => {

    return (
        <div className='hero'>
            <div className="hero-flex">
                <div className="left">
                    <h2>Get your passwords organized</h2>
                    <div className="btn">
                        <button>Get started</button>
                    </div>
                </div>
                <div className='img-app'>
                    <img className="picture" src={image} alt=""></img>
                </div>
            </div>
        </div>
    )
}



export default AppsMain;