import React, { useEffect } from 'react';
import './Project.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({ project }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const { title, image, description, technology, liveSite, client, server, clientCode, serverCode } = project;

    return (
        <div className="col-md-4 text-dark mb-5" data-aos="zoom-in">
            <h3 className="text-center title">{title}</h3>
            <div className="boxes">
                <img className="img-fluid h-100" src={image} alt={title} />
                <div className="project-container">
                    <h5 style={{color: '#ccd6f6'}} className="text-center">{title}</h5>
                    <p>{description}</p>
                    <strong style={{color: '#ccd6f6'}}>Technology : {technology}</strong>
                    <div className="link d-flex justify-content-around">
                        <a href={liveSite} target="_blank" rel="noreferrer">Live Site</a>
                        <a href={client} target="_blank" rel="noreferrer">{clientCode}</a>
                        <a href={server} target="_blank" rel="noreferrer">{serverCode}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;