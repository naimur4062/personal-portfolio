import React, { useEffect } from 'react';
import Skills from '../Skills/Skills';
import './AboutDetail.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutDetail = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className="d-flex justify-content-center">
            <div className="row container">
                <div data-aos="fade-right" className="col-md-6">
                    <h1 className="text-white mt-5">About me</h1>
                    <div>
                        <h2 className="text-white mt-4">I am <span style={{ color: '#FF6347', fontWeight: '500' }}>Md Naimur Rahman</span></h2>
                        <p className="text-white mt-4">I am a curious full stack web developer. I like to play with java script and node js. Every day I try to learn new technology to improve my skills. I try hard to make my client happy. But I also failed in sometimes. In my daily life, I drink coffee and tear off my hear to solve problems.</p>
                    </div>
                    <div className="d-flex justify-content-start mt-4">
                        <div className="identity d-flex justify-content-start">
                            <div className="">
                                <h4 className="text-white">Full Name</h4>
                                <h4 className="text-white">Age</h4>
                                <h4 className="text-white">Nationality</h4>
                                <h4 className="text-white">Address</h4>
                                <h4 className="text-white">Language</h4>
                                <h4 className="text-white">Freelance</h4>
                            </div>
                            <div className="ms-5">
                                <h4 className="text-white">:</h4>
                                <h4 className="text-white">:</h4>
                                <h4 className="text-white">:</h4>
                                <h4 className="text-white">:</h4>
                                <h4 className="text-white">:</h4>
                                <h4 className="text-white">:</h4>
                            </div>
                            <div className="ms-3">
                                <h4 className="text-white">Md Naimur Rahman</h4>
                                <h4 className="text-white">22</h4>
                                <h4 className="text-white">Bangladeshi</h4>
                                <h4 className="text-white">Chuadanga, Khulna</h4>
                                <h4 className="text-white">Bangla, English</h4>
                                <h4 className="text-white">Available</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="skills col-md-6">
                    <Skills />
                </div>
            </div>
        </div>
    );
};

export default AboutDetail;