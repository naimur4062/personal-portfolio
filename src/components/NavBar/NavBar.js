import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
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
                        <Nav.Link href="/"><span className="navLink">HOME</span></Nav.Link>
                        <Nav.Link href="/#about"><span className="navLink">ABOUT</span></Nav.Link>
                        <Nav.Link href="/#skill"><span className="navLink">SKILLS</span></Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1vtk_YtomvnDs4qhp9apiRIpuE8J5CE3c/view?usp=sharing" target="_blank" rel="noreferrer"><span className="navLink">RESUME</span></Nav.Link>
                        <Nav.Link href="/projects"><span className="navLink">PROJECTS</span></Nav.Link>
                        <Nav.Link href="/blogs"><span className="navLink">BLOGS</span></Nav.Link>
                        <Nav.Link href="/contact"><span className="navLink">CONTACT</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;