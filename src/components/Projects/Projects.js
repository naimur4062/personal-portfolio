import React from 'react';
import SideBar from '../SideBar/SideBar';
import Project from './Project';
import wisdomCoaching from '../../images/wisdom.PNG';
import carHouse from '../../images/carHouse.PNG';
import footballLeague from '../../images/laliga.PNG';
import bdTeam from '../../images/bdteam.PNG';
import rides from '../../images/rides.PNG';

const Projects = () => {
    const projectData = [
        {   
            id: 1,
            title : "Wisdom Coaching",
            description : "This is a website for a Coaching center. Its purpose is to serve quality education in the circumstance of Bangladesh education. Here, students can enroll in their desired admission courses. An admin can control all enrollments if it’s done or pending. An admin can maintain the database. He can delete or add new courses to the database. The admin also can appoint someone as admin.",
            technology : "HTML5, CSS3, Bootstrap, React, React-Bootstrap, Font Awesome, Firebase, NodeJS, Express JS, MongoDB",
            image : wisdomCoaching,
            liveSite : "https://wisdom-coaching-abf2f.web.app/",
            client : "https://github.com/naimur4062/wisdom-coaching-client",
            server : "https://github.com/naimur4062/wisdom-coaching-server",
            clientCode: 'Client',
            serverCode: 'Server'
        },
        {
            id: 2,
            title : "Car House",
            description : "It is a car-selling website. Some pages of this website are private based on admins and users. Here, customers can buy various brands of cars. Customers can see all of his order lists. Admin has the power to maintain the website. He can remove or add new cars and can control the database.",
            technology : "HTML5, CSS3, Bootstrap, React-Bootstrap, Material UI, Firebase, Heroku, NodeJS, Express JS, MongoDB",
            image : carHouse,
            liveSite : "https://carhouse-f64ce.web.app/",
            client : "https://github.com/naimur4062/car-house-client",
            server : "https://github.com/naimur4062/car-house-server",
            clientCode: 'Client',
            serverCode: 'Server'
        },
        {
            id: 3,
            title : "Football League",
            description : "It's a simple two pages web application. It shows all teams in a league. If you have curious to know the details of a team, just click on explore button of the team's card. Then, you can see the details of the team.",
            technology : "HTML5, CSS3, Bootstrap, React, Routing, Conditional Rendering, Netlify Deploy.",
            image : footballLeague,
            liveSite : "https://604a012d1a9aec80cc3c6ae0--vibrant-northcutt-d5fbc6.netlify.app/",
            client : "https://github.com/naimur4062/teams-league",
            clientCode: 'Code'
        },
        {
            id: 4,
            title : "Bangladesh Cricket Team",
            description : "It is a simple page web application. Here, you can see the information about all cricketers of Bangladesh. Admin can create a squad for any kind of Tour by clicking add player. After finalizing a squad, It shows all the cost of that tour.",
            technology : "HTML5, CSS3, Bootstrap, JavaScript, React, Netlify Deploy.",
            image : bdTeam,
            liveSite : "https://gifted-engelbart-996f5e.netlify.app/",
            client : "https://github.com/naimur4062/bd-cricket-team",
            clientCode: 'Code'
        },
        {
            id: 5,
            title : "Inter City Rider",
            description : "It’s a simple web application using React and Bootstrap.  It is a ride-sharing website where users can take rides from one city to another city. Users can read the description of the places and to confirm the booking, users have to fill up a form and click on booking. After clicking start booking, he/she can see his/her booking along with a google map for the surety of his destination.",
            technology : "HTML5, CSS3, Bootstrap, React, ES6, Bootstrap, Font Awesome, Firebase",
            image : rides,
            liveSite : "https://assignment-9-a18cc.web.app/",
            client: "https://github.com/naimur4062/inter-city-rides",
            clientCode: 'Code'
        }
    ];
    return (
        <section>
            <div className="text-center">
                <SideBar />
            </div>
            <div style={{backgroundColor: '#00101a'}} className="container-fluid">
                <h1 style={{color: '#ccd6f6'}} className="text-center py-4">My projects</h1>
                <div className="row">
                     {
                         projectData.map(project => <Project key={project.id} project={project}/>)
                     }
                </div>
            </div>
        </section>
    );
};

export default Projects;