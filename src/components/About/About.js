import React from 'react';
import AboutDetail from '../AboutDetail/AboutDetail';
import SideBar from '../SideBar/SideBar';

const About = () => {
    return (
        <div className="row">
            <div className="col-md-2 text-center p-0">
                <SideBar />
            </div>
            <div style={{ backgroundColor: '#191970' }} className="col-md-10">
                <AboutDetail/>
            </div>
        </div>
    );
};

export default About;