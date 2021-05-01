import React from 'react';
import Typical from 'react-typical';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import './Header.css';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="d-flex justify-content-center">
            <div style={{ marginTop: '200px' }}>
                <h1 className="text-white">Hello, I'm <span style={{ color: '#FF6347', fontWeight: '800' }}>Md Naimur Rahman</span></h1>
                <Typical
                    style={{ fontWeight: '900' }}
                    className="text-white"
                    steps={[
                        'Full Stack Web-developer', 2000,
                        'React and Node js expert', 2000,
                        'UI/UX Designer', 2000,
                    ]}
                    loop={Infinity}
                    wrapper="h1"
                />
                <div className="resume">
                    <Button>
                        DOWNLOAD RESUME
                    </Button>
                </div>
                <div className="icon text-center mt-5">
                    <a href="https://www.facebook.com/naimurrahman.abeer">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/naimur99">
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="https://github.com/naimur4062">
                        <img src={github} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;