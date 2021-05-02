import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div style={{ backgroundColor: '#000080' }}>
            <div className="d-flex justify-content-between">
                <div>
                    <h1 className="text-white mx-5 my-4">Welcome</h1>
                </div>
                <div>
                    <Navbar collapseOnSelect expand="lg">
                        <div className="container my-4">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                    <Link className="nav-link text-white" to="/home">
                                        HOME
                                    </Link>
                                    <Link className="nav-link text-white" to="/about">
                                        ABOUT
                                    </Link>
                                    <Link className="nav-link text-white" to="/resume">
                                        RESUME
                                    </Link>
                                    <Link className="nav-link text-white" to="/portfolios">
                                        PORTFOLIOS
                                    </Link>
                                    <Link className="nav-link text-white" to="/blogs">
                                        BLOGS
                                   </Link>
                                    <Link className="nav-link text-white" to="/contact">
                                        CONTACT
                                   </Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default SideBar;