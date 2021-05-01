import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import abir from '../../images/abir99.jpg';
import './SideBar.css';

const SideBar = () => {
    return (
        <div style={{ backgroundColor: '#000080' }}>
            <Navbar collapseOnSelect expand="lg">
                <div className="container">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="d-flex flex-column ">
                            <div className="userImg mb-5">
                                <img style={{ width: '150px', borderRadius: '100px' }} src={abir} alt="" />
                            </div>
                            <div className="sidebar mb-5">
                                <Link className="nav-link text-white" to="/home">
                                    HOME
                                </Link>
                                <Link className="nav-link text-white" to="/dashboard">
                                    ABOUT
                                </Link>
                                <Link className="nav-link text-white" to="">
                                    RESUME
                                </Link>
                                <Link className="nav-link text-white" to="">
                                    PORTFOLIOS
                                </Link>
                                <Link className="nav-link text-white" to="">
                                    BLOGS
                                </Link>
                                <Link className="nav-link text-white" to="">
                                    CONTACT
                                </Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default SideBar;