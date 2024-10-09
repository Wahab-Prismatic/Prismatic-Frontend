import React from 'react';
import '../assets/css/Portfolio.css';
import PortfolioImg from '../assets/images/Portfolio.jpg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const buttonsData = [
        { link: "#ecomerce", label: "E-Commerce" },
        { link: "#lms", label: "LMS" },
        { link: "#ERP", label: "ERP" },
        { link: "#website", label: "Websites" },
        { link: "#digital-mark", label: "Digital Marketing" }
    ];

    return (
        <>
            {/* <!-- Banner Starts Here --> */}
            <div className="products-header-wrapper">
                <img src={PortfolioImg} loading="lazy" alt="portfolio" title="portfolio" draggable={false} />
                <div className="P-header-text text-content">
                </div>
            </div>
            {/* <!-- Banner Ends Here --> */}

            <div className="container-fluid">
            <div className="sec-buttons">
                {buttonsData.map((button, index) => (
                    <div className="item" key={index}>
                        <Link to={button.link}>
                            <button className="pg-button">{button.label}</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Portfolio