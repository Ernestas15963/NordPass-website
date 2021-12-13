import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footer">
            <div className="top-footer">
                <div>
                    <ul className="terms">
                        <li><Link to='/' className="link link2">Engage</Link></li>
                        <li><Link to='/' className="link">Privacy Policy</Link></li>
                        <li><Link to='/' className="link">Terms of Service</Link></li>
                    </ul>
                </div>
                <div className="copyrights">
                    Copyright &copy; 2020 NordPass.com 
                </div>
            </div>
        </div>
    )
}

export default Footer;