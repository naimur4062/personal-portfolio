import React, { useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Skills.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const frontEnd = [
    { name: "HTML", parentage: 90, color: "primary" },
    { name: "Bootstrap", parentage: 80, color: "info" },
    { name: "CSS", parentage: 80, color: "success" },
    { name: "JavaScript", parentage: 70, color: "warning" },
    { name: "React", parentage: 75, color: "info" }
]
const backEnd = [
    { name: "NodeJS", parentage: 50, color: "danger" },
    { name: "MongoDB", parentage: 60, color: "warning" },
    { name: "expressJS", parentage: 65, color: "primary" }
]

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div id="skill" className="container">
            <h1 data-aos="fade-down" style={{color: '#ccd6f6'}} className="text-center pt-5">My Expertise</h1>
            <div className="row skillName">
                <div className="col-md-6">
                    <h1  data-aos="zoom-in" className="heading text-center pt-5">Front-End</h1>
                    {frontEnd.map(skill => (
                        <div data-aos="fade-right">
                            <h3 className="mt-3">{skill.name}</h3>
                            <ProgressBar striped variant={`${skill.color}`} now={skill.parentage} label={`${skill.parentage}%`} />
                        </div>))}
                </div>
                <div className="col-md-6">
                    <h1  data-aos="zoom-in" className="heading text-center pt-5">Back-End</h1>
                    {backEnd.map(skill => (
                        <div data-aos="fade-left">
                            <h3 className="mt-3">{skill.name}</h3>
                            <ProgressBar striped variant={`${skill.color}`} now={skill.parentage} label={`${skill.parentage}%`} />
                        </div>))}
                    <div className="toolsDiv">
                        <h3  data-aos="zoom-in" className="text-center pt-3">Tools</h3>
                        <div data-aos="fade-up-left" className="tools">
                            <ul className="d-flex justify-content-evenly">
                                <li>Git</li>
                                <li>VS Code</li>
                                <li>Chrome Dev Tool</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;