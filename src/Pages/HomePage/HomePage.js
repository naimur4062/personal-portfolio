import React from 'react';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import SideBar from '../../components/SideBar/SideBar';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <SideBar />
            <div style={{ backgroundColor: '#00101a' }}>
                <Home />
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;