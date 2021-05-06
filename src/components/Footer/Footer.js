import React from 'react';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
             <div className="icon text-center mt-5">
                        <a href="https://www.facebook.com/naimurrahman.abeer" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/naimur99" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="https://github.com/naimur4062" target="_blank" rel="noreferrer">
                            <img src={github} alt="" />
                        </a>
                    </div>
        </div>
    );
};

export default Footer;