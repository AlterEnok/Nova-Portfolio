import React from 'react';
import './preloader.css';
import logo from '../../img/icons/logo-nova.png'; // путь к твоему лого

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="loader-content">
                <div className="glow-ring"></div>
                <img src={logo} alt="Nova Team Logo" className="loader-logo" />
            </div>
        </div>
    );
};

export default Preloader;
