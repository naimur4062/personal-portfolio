import React from 'react';
import './ResumePart.css';

const ResumePart = () => {
    return (
        <div className="text-white">
            <h1>Resume</h1>
            <div className="d-flex justify-content-evenly resumeSkill">
                <div className="mt-3">
                    <h3 className="mb-4">Working Experience</h3>
                    <ul>
                        <li>I am an expert UI/UX designer.</li>
                        <li>Experienced full stack web-developer with react and node js.</li>
                        <li>Developed 7+ applications with react js and 4+ full stack web applications <br /> which processed, analyzed and rendered data.</li>
                        <li>Used routing, destructuring, ES6 in my applications.</li>
                        <li>Expert in problem solving by google or any other resources.</li>
                        <li>Manage, developed and updated mongodb database as necessary.</li>
                        <li>Ensure applications security and accuracy with multiple APIs and databases.</li>
                        <li>Planned, wrote and debugged web applications and software with complete accuracy.</li>
                    </ul>
                </div>
                <div className="mt-3">
                    <h3 className="mb-4">Education</h3>
                    <h5>Islamic University</h5>
                    <h5>Kushtia, Bangladesh</h5>
                    <p>I'm a student of hons 2nd year.</p>
                    <h4>and</h4>
                    <div>
                        <h5>Junior web-developer</h5>
                        <p>May, 2019 - January, 2020</p>
                    </div>
                    <div>
                        <h5>Full stack web-developer</h5>
                        <p>January, 2020 - present</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumePart;