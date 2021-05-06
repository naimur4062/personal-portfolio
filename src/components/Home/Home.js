import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

const Home = () => {
    return (
        <div>
            <div className="text-center">
                <SideBar />
            </div>
            <div style={{ backgroundColor: '#00101a'}}>
                <Header />
            </div>
            <div id="about">
                <About/>
            </div>
        </div>
    );
};

export default Home;