import React from 'react';
import SideBar from '../SideBar/SideBar';
import Wisdom from '../../images/wisdom.PNG';
import CarHouse from '../../images/carHouse.PNG';
import Laliga from '../../images/laliga.PNG';
import BdTeam from '../../images/bdteam.PNG';
import Rides from '../../images/rides.PNG';
import PortfolioDetail from '../PortfolioDetail/PortfolioDetail';

const portfolios = [
    {
        title: 'Wisdom Coaching',
        description: 'Engineering, Medical, University admission.',
        website: 'https://wisdom-coaching-abf2f.web.app/',
        github: 'https://github.com/naimur4062/wisdom-coaching-client',
        img: Wisdom

    },
    {
        title: 'Car House',
        description: "Sells various brand's of cars.",
        website: 'https://carhouse-f64ce.web.app/',
        github: 'https://github.com/naimur4062/car-house-client',
        img: CarHouse

    },
    {
        title: 'Laliga',
        description: 'Information about the english premier league.',
        website: 'https://604a012d1a9aec80cc3c6ae0--vibrant-northcutt-d5fbc6.netlify.app/',
        github: 'https://github.com/naimur4062/teams-league',
        img: Laliga

    },
    {
        title: 'Bangladesh Team',
        description: 'Players of Bangladesh cricket team.',
        website: 'https://gifted-engelbart-996f5e.netlify.app/',
        github: 'https://github.com/naimur4062/bd-cricket-team',
        img: BdTeam

    },
    {
        title: 'Inter city riders',
        description: "Serve e-ticket between city to city.",
        website: 'https://assignment-9-a18cc.web.app/',
        github: 'https://github.com/naimur4062/inter-city-rides',
        img: Rides

    }
]

const Portfolios = () => {
    return (
        <div>
            <div className="text-center">
                <SideBar />
            </div>
            <div className="d-flex justify-content-center" style={{ backgroundColor: '#191970' }}>
                <div className="row container">
                    {
                        portfolios.map(portfolio => <PortfolioDetail portfolio={portfolio} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolios;