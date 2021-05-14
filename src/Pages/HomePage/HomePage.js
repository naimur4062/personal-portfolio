import React from 'react';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <div style={{ backgroundColor: '#00101a' }}>
                <Home />
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;