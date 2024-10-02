import React, { useEffect, useState } from 'react';
import '../assets/css/Navbar.css';
import prismaticLogo from '../assets/icons/1st-logo.webp';
import logo2 from '../assets/icons/logo2.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky': ''}`}>
                <div className="container">
                    <a href="/">
                        <img className="header__logo sticky-hide" src={prismaticLogo} alt="main-logo" style={{ width: '157px' }} />
                        <img className="header__logo sticky-show" src={logo2} alt="main-logo" style={{ width: '157px' }} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto" style={{ marginTop: '5px' }}>
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Who we are
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/about-us">About Us</Link>
                                    <Link className="dropdown-item" to="/prismatic-activity">Life At Prismatic</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Services
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/services/premier-advertising-agency-chicago">Premier Advertising Agency Chicago</Link>
                                    <Link className="dropdown-item" to="/services/mobile-app-development">Mobile App</Link>
                                    <Link className="dropdown-item" to="services/e-commerce-service">E-Commerce Website</Link>
                                    <Link className="dropdown-item" to="https://prismatrix.co/" target='_blank'>Digital Marketing</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Products
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/products/erp-software-in-pakistan">ERP Software</Link>
                                    <a className="dropdown-item" href="https://crmprismatic.com/">Real Estate CRM</a>
                                    <a className="dropdown-item" href="/learning-management-system">LMS Software</a>
                                    <a className="dropdown-item" href="/pos-software-services">POS System</a>
                                    <a className="dropdown-item" href="/hrm-software-services">HRM Software</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/prismatic-portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/career">Career</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blogs">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar