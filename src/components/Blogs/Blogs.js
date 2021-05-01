import React from 'react';
import SideBar from '../SideBar/SideBar';

const Blogs = () => {
    return (
        <div className="row">
            <div className="col-md-2 text-center p-0">
                <SideBar />
            </div>
            <div style={{ backgroundColor: '#191970'}} className="col-md-10">
                <h1 className="text-white">Blogs are coming soon.</h1>
            </div>
        </div>
    );
};

export default Blogs;