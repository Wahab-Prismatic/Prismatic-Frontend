import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/Navbar.css';
import prismaticLogo from '../assets/icons/1st-logo.webp';
import logo2 from '../assets/icons/logo2.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const navbarRef = useRef(null);

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setShowMenu(false);  // Close the menu if clicked outside
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMenu = () =>  {
        setShowMenu(!showMenu);
    }

    const closeMenu = () => setShowMenu(false); 

    const handleClick = () => {
        window.scrollTo(0, 0);
        closeMenu(); // Call closeMenu to setShowMenu(false)
      };

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky': ''}`} ref={navbarRef}>
                <div className="container-fluid" style={{ padding: '0' }}>
                    <Link to="/">
                        <img className="header__logo sticky-hide" src={prismaticLogo} alt="main-logo" style={{ width: '157px' }} />
                        <img className="header__logo sticky-show" src={logo2} alt="main-logo" style={{ width: '157px' }} />
                    </Link>
                    <button
                        className={`navbar-toggler ${isSticky ? 'icon-white' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                        style={{ color: isSticky ? '#fff' : '#0274b8' }}
                        onClick={toggleMenu}
                    >
                        <span><i className="fa fa-bars"></i></span>
                    </button>
                    <div className={`collapse navbar-collapse ${showMenu ? 'show dropdown-transition' : 'hide'}`} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto" style={{ marginTop: '5px' }}>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" onClick={closeMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Who we are
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/about-us" onClick={handleClick}>About Us</Link>
                                    <Link className="dropdown-item" to="/prismatic-activity" onClick={handleClick}>Life At Prismatic</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Services
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/services/premier-advertising-agency-chicago" onClick={handleClick}>Premier Advertising Agency Chicago</Link>
                                    <Link className="dropdown-item" to="/services/mobile-app-development" onClick={handleClick}>Mobile App</Link>
                                    <Link className="dropdown-item" to="services/e-commerce-service" onClick={handleClick}>E-Commerce Website</Link>
                                    <Link className="dropdown-item" to="https://prismatrix.co/" target='_blank' onClick={handleClick}>Digital Marketing</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Products
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/products/erp-software-in-pakistan" onClick={handleClick}>ERP Software</Link>
                                    <Link className="dropdown-item" to="https://crmprismatic.com/" target='_blank' onClick={handleClick}>Real Estate CRM</Link>
                                    <Link className="dropdown-item" to="/products/learning-management-system" onClick={handleClick}>LMS Software</Link>
                                    <Link className="dropdown-item" to="/products/pos-software-services" onClick={handleClick}>POS System</Link>
                                    <Link className="dropdown-item" to="/products/hrm-software-services" onClick={handleClick}>HRM Software</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/prismatic-portfolio" onClick={handleClick}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/career" onClick={handleClick}>Career</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs" onClick={handleClick}>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us" onClick={handleClick}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar