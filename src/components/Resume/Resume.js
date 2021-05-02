import { Button } from 'react-bootstrap';
import React from 'react';
import SideBar from '../SideBar/SideBar';
import ResumePart from '../ResumePart/ResumePart';

const Resume = () => {
    return (
        <div>
            <div className="text-center">
                <SideBar />
            </div>
            <div style={{ backgroundColor: '#191970' }}>
                <div className="resume text-center">
                    <a href="https://drive.google.com/uc?export=download&id=1vtk_YtomvnDs4qhp9apiRIpuE8J5CE3c">
                        <Button>
                            GET FULL RESUME
                        </Button>
                    </a>
                </div>
                <div className="container mt-5">
                    <ResumePart />
                </div>
            </div>
        </div>
    );
};

export default Resume;