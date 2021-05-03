import React from 'react';
import AboutDetail from '../AboutDetail/AboutDetail';
import SideBar from '../SideBar/SideBar';

const About = () => {
    return (
        <div>
            <div className="text-center">
                <SideBar />
            </div>
            <div className="d-flex justify-content-center" style={{ backgroundColor: '#00101a', paddingTop: '100px'}}>
                <AboutDetail />
            </div>
        </div>
    );
};

export default About;