import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="row pt-5">
            <div className="d-flex justify-content-center col-md-6">
                <div className="abir mt-3"></div>
            </div>
            <div style={{marginTop: '160px'}} className="d-flex justify-content-start col-md-6">
                <div style={{ marginBottom: '50px' }}>
                    <p className="hello">Hello, my name is</p>
                    <h1 className="name">Md Naimur Rahman</h1>
                    <h5 className="textI text-center">I'm
                    <Typical
                            steps={[
                                'Full Stack Web-developer', 2000,
                                'React and Node js expert', 2000,
                                'UI/UX Designer', 2000,
                            ]}
                            loop={Infinity}
                            wrapper="h1"
                            className="text"
                        />
                    </h5>
                    <div className="resume text-center py-3">
                        <Link to="/contact">
                            <Button className="hire">
                                HIRE ME
                            </Button>
                        </Link>
                        <a href="https://drive.google.com/uc?export=download&id=1vtk_YtomvnDs4qhp9apiRIpuE8J5CE3c">
                            <Button className="download">
                            <FontAwesomeIcon icon={faFileDownload} className="me-2"/>
                                RESUME
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;