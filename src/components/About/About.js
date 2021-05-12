import React from 'react';
import AboutDetail from '../AboutDetail/AboutDetail';
import Skills from '../Skills/Skills';

const About = () => {
    
    return (
        <div>
            <div className="d-flex justify-content-center pt-3" style={{ backgroundColor: '#00101a'}}>
                <AboutDetail />
            </div>
            <div style={{ backgroundColor: '#00101a', paddingBottom: '100px'}}>
                <Skills/>
            </div>
        </div>
    );
};

export default About;