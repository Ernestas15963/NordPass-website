import React from 'react';
import './Header.css';

const Header = (props) => {
    return(
        <div className="header">
            <h3>{props.title}</h3>
        </div>
    )
}

export default Header;