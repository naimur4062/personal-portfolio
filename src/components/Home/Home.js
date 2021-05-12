import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#00101a'}}>
                <Header />
            </div>
            <div>
                <About/>
            </div>
        </div>
    );
};

export default Home;