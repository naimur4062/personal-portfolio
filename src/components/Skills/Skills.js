import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="container ms-5">
            <h1 className="text-white mt-5">My Skills</h1>
            <div className="d-flex justify-content-start">
                <div>
                    <div className="expert text-white">
                        <h5>Expert with</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>ES6</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div className="comfortable text-white mt-4">
                        <h5>Comfortable with</h5>
                        <ul>
                            <li>React Bootstrap</li>
                            <li>Material Ui</li>
                            <li>Node js</li>
                            <li>Redux</li>
                            <li>Mongodb</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                </div>
                <div className="familiar-tool-deploy">
                    <div className="familiar text-white">
                        <h5>Familiar with</h5>
                        <ul>
                            <li>OOP</li>
                            <li>Next js</li>
                            <li>SASS</li>
                            <li>jQuery</li>
                            <li>Data Structure</li>
                            <li>Algorithm</li>
                        </ul>
                    </div>
                    <div className="tools text-white">
                        <h5>Tools</h5>
                        <ul>
                            <li>Git</li>
                            <li>Vs Code</li>
                            <li>Chrome Dev tool</li>
                        </ul>
                    </div>
                    <div className="deploy text-white">
                        <h5>Deploy</h5>
                        <ul>
                            <li>Firebase</li>
                            <li>Netlify</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;