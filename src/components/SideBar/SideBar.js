import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sideBarContainer">
            <div className="d-flex justify-content-between sideBarHeight">
                <div>
                    <h1 className="text-white mx-5 my-2">NAIMUR</h1>
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
                                    <NavHashLink 
                                         to="/#skill"
                                         activeClassName="selected"
                                        className="nav-link text-white">
                                        Skill
                                    </NavHashLink>
                                    <a href="https://drive.google.com/file/d/1vtk_YtomvnDs4qhp9apiRIpuE8J5CE3c/view?usp=sharing" className="nav-link text-white" target="_blank" rel="noreferrer">RESUME</a>
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