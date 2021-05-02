import React from 'react';
import './PortfolioDetail.css';
import webLink from '../../images/link.png';
import gitLink from '../../images/github.png';

const PortfolioDetail = ({ portfolio }) => {

    return (
        <div className="col-md-4">
            <div className="site">
                <div className="cardImg">
                    <img src={portfolio.img} alt="" />
                </div>
                <div className="link d-flex justify-content-center">
                    <a target="_blank" href={portfolio.website}>
                        <img src={webLink} alt="" />
                    </a>
                    <a target="_blank" href={portfolio.github}>
                        <img src={gitLink} alt="" />
                    </a>
                </div>
            </div>
            <div className="detail text-white mt-3">
                <h5>{portfolio.title}</h5>
                <p>{portfolio.description}</p>
            </div>
        </div>
    );
};

export default PortfolioDetail;