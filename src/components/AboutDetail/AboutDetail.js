import React, { useEffect } from 'react';
import './AboutDetail.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutDetail = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="d-flex justify-content-center pb-5">
            <div className="container">
                <h1 style={{ color: '#ccd6f6' }} data-aos="fade-down" className="mt-5">About me</h1>
                <div className="title-divider">
                    <span></span>
                    <span></span>
                </div>
                <div className="row about-me">
                    <div data-aos="fade-right" className="col-md-6 col-sm-12">
                        <div className="aboutMe">
                            <h2>I am <span className="name">Md Naimur Rahman</span></h2>
                            <p>Welcome, I am glad to know that you are landing on my website and searching for about me.</p>
                            <p>I am a curious full-stack web developer. I like to play with javascript and node js. My real strength is my ability to learn new technology with eagerness. I am always ready to learn or to do anything for my client's needs. Every day I try to learn new technology to improve my skills. Now, I am looking for a junior web-developer role in a reputable organization to utilize my programming and management skills for the growth of the organization as well as to gain more confidence and knowledge about the IT sector.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="col-md-6 col-sm-12">
                        <div className="contactCard">
                            <div className="contactDetail row">
                                <div className="col-md-6">
                                    <p className="cardTitle">Phone:</p>
                                    <p style={{ color: 'gray' }}>01797-276647</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="cardTitle">Email:</p>
                                    <p style={{ color: 'gray' }}>naimur4062@gmail.com</p>
                                </div>
                                <div className="col-md-6 social">
                                    <p className="cardTitle">LinkedIn:</p>
                                    <a href="https://www.linkedin.com/in/naimur99/" target="_blank" rel="noreferrer">
                                        <p style={{ color: 'gray' }}>Click to go LinkedIn</p>
                                    </a>
                                </div>
                                <div className="col-md-6 social">
                                    <p className="cardTitle">Github:</p>
                                    <a href="https://github.com/naimur4062" target="_blank" rel="noreferrer">
                                        <p style={{ color: 'gray' }}>Click to go Github</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDetail;