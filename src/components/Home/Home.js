import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

const Home = () => {
    return (
        <div className="row">
            <div className="col-md-2 text-center p-0">
                <SideBar />
            </div>
            <div style={{ backgroundColor: '#191970'}} className="col-md-10">
                <Header />
            </div>
        </div>
    );
};

export default Home;