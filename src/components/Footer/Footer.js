import React, { useEffect } from 'react';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import './Footer.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <section>
            <div data-aos="fade-up" className="container connectDiv">
                <div className="connect text-center mb-4">
                    <h1>Stay Connected</h1>
                    <p className="mt-4">Thank you for visiting my website. Currently, I'm looking for new opportunities. If you have an interest or any questions about me. You can email me or click on say hi below.</p>
                    <div className="email mt-5">
                        <h5>EMAIL</h5>
                        <h5>naimur4062@gmail.com</h5>
                        <h4>Or</h4>
                    </div>
                    <div className="sayHi d-flex justify-content-center">
                        <Link to="/contact">
                            <p>Say Hello</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="icon text-center pt-3">
                <a href="https://www.linkedin.com/in/naimur99" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/naimur4062" target="_blank" rel="noreferrer">
                    <img src={github} alt="" />
                </a>
                <a href="https://twitter.com/MNRahma90555837" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="" />
                </a>
            </div>
            <div className="builder text-center pt-5 pb-1">
                <p>Designed and Built by Naimur Rahman</p>
            </div>
        </section>
    );
};

export default Footer;