import React from 'react';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import SideBar from '../../components/SideBar/SideBar';

const HomePage = () => {
    return (
        <div>
            <SideBar/>
            <Home/> 
            <Footer/>
        </div>
    );
};

export default HomePage;