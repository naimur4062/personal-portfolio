import React from 'react';
import { Button } from 'react-bootstrap';
import Typical from 'react-typical';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import abir from '../../images/abir.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="abir d-flex justify-content-center pt-5">
                <img src={abir} alt="" />
            </div>
            <div className="d-flex justify-content-center container mt-5">
                <div style={{ marginBottom: '50px' }}>
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
                    <div className="resume text-center">
                        <a href="https://drive.google.com/uc?export=download&id=1vtk_YtomvnDs4qhp9apiRIpuE8J5CE3c">
                            <Button>
                                RESUME
                            </Button>
                        </a>
                    </div>
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
            </div>
        </div>
    );
};

export default Header;