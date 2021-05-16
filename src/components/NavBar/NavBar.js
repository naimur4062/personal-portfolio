import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
                <Navbar.Brand>
                    <h1>NAIMUR</h1>
                </Navbar.Brand>
                <Navbar.Toggle id="toggle"/>
                <Navbar.Collapse className="text-center">
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <Link to="/"><span className="navLink">HOME</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <NavHashLink to="/#about"><span className="navLink">ABOUT</span></NavHashLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavHashLink to="/#skill"><span className="navLink">SKILLS</span></NavHashLink>
                        </Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1vtk_YtomvnDs4qhp9apiRIpuE8J5CE3c/view?usp=sharing" target="_blank" rel="noreferrer">
                            <Link><span className="navLink">RESUME</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/projects"><span className="navLink">PROJECTS</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/blogs"><span className="navLink">BLOGS</span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact"><span className="navLink">CONTACT</span></Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;