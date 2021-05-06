import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const SideBar = () => {
    return (
        <div style={{ backgroundColor: '#181a27' }}>
            <div style={{ height: '80px' }} className="d-flex justify-content-between">
                <div>
                    <h1 className="text-white mx-5 my-2">Welcome</h1>
                </div>
                <div>
                    <Navbar collapseOnSelect variant="dark" expand="lg">
                        <div className="container my-2">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                    <Link className="nav-link text-white" to="/home">
                                        HOME
                                    </Link>
                                    {/* <NavHashLink
                                        to="/#about"
                                        activeClassName="selected"
                                        // activeStyle={{ color: 'red' }}
                                    >AboutT</NavHashLink> */}
                                    <NavHashLink 
                                         to="/#about"
                                         activeClassName="selected"
                                        className="nav-link text-white">
                                        ABOUT
                                    </NavHashLink>
                                    <Link className="nav-link text-white" to="/resume">
                                        RESUME
                                    </Link>
                                    <Link className="nav-link text-white" to="/portfolios">
                                        PORTFOLIOS
                                    </Link>
                                    {/* <Link className="nav-link text-white" to="/blogs">
                                        BLOGS
                                   </Link> */}
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