import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import primaticLogo from '../assets/icons/prismatic_logo.png';
import { ShimmerDiv } from 'shimmer-effects-react';

const Footer = () => {
    const [isLoading, setIsLoading] = useState(true);

    const phoneNumber = "923078881432";
    const formattedPhone = `https://api.whatsapp.com/send?phone=${phoneNumber}`
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {
                isLoading ? (
                    <ShimmerDiv
                        mode='light'
                        height={500}
                        width='100%'
                    />
                ) : (
                    <>
                        <footer style={{ marginTop: '20px' }}>
                            <div className="container">
                                <div className="row">
                                    {/* Logo and About Section */}
                                    <div className="col-lg-3 col-md-12 footer-item">
                                        <img
                                            width="100%"
                                            className="pb-5 foot5"
                                            src={primaticLogo}
                                            alt="prismatic_logo"
                                            title="prismatic_logo"
                                        />
                                        <p>Bringing your vision to life, we build and manage a world-class team of developers.</p>
                                        <ul className="social-icons" style={{ padding: '0px' }}>
                                            <li>
                                                <Link
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="facebook"
                                                    to="https://web.facebook.com/prismatictechnologieslimited/"
                                                >
                                                    <i className="fa fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="instagram"
                                                    to="https://www.instagram.com/prismatictechnologieslimited"
                                                >
                                                    <i className="fa fa-instagram"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Linkedin"
                                                    to="https://www.linkedin.com/company/13072092/admin/"
                                                >
                                                    <i className="fa fa-linkedin"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Twitter"
                                                    to="https://twitter.com/prismatictechn"
                                                >
                                                    <i className="fa fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Youtube"
                                                    to="https://www.youtube.com/channel/UCDcutFeu2vYa5g7fR_jIIIg"
                                                >
                                                    <i className="fa fa-youtube"></i>
                                                </Link>
                                            </li>
                                            <li style={{ marginTop: '6px' }}>
                                                <Link
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Pinterest"
                                                    to="https://www.pinterest.com/prismatictechnologieslimited/_created/"
                                                >
                                                    <i className="fa fa-pinterest"></i>
                                                </Link>
                                            </li>
                                            <li style={{ marginTop: '6px' }}>
                                                <Link
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="tiktok"
                                                    to="https://www.tiktok.com/@prismatictechnologies"
                                                >
                                                    <i className="fa-brands fa-tiktok"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Useful Links */}
                                    <div className="col-lg-3 col-md-4 footer-item">
                                        <h4>Useful Links</h4>
                                        <ul className="menu-list" style={{ listStyle: 'square' }}>
                                            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                                            <li><Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
                                            <li><Link to="/services/premier-advertising-agency-chicago" onClick={() => window.scrollTo(0, 0)}>Services</Link></li>
                                            <li><Link to="/prismatic-portfolio" onClick={() => window.scrollTo(0, 0)}>Portfolio</Link></li>
                                            <li><Link to="/blogs" onClick={() => window.scrollTo(0, 0)}>Blogs</Link></li>
                                            <li><Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
                                            <li><Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link></li>
                                        </ul>
                                    </div>

                                    {/* Products */}
                                    <div className="col-lg-3 col-md-4 footer-item">
                                        <h4>Products</h4>
                                        <ul className="menu-list" style={{ listStyle: 'square' }}>
                                            <li><Link to="/products/erp-software-in-pakistan" onClick={() => window.scrollTo(0, 0)}>ERP Software</Link></li>
                                            <li><Link to="https://crmprismatic.com/" target='_blank' onClick={() => window.scrollTo(0, 0)}>Real Estate CRM</Link></li>
                                            <li><Link to="/products/learning-management-system" onClick={() => window.scrollTo(0, 0)}>LMS Software</Link></li>
                                            <li><Link to="/mobile-app-development">Mobile App onClick={() => window.scrollTo(0, 0)}</Link></li>
                                            <li><Link to="/services/e-commerce-service" onClick={() => window.scrollTo(0, 0)}>E-Commerce Website</Link></li>
                                            <li><Link to="/products/pos-software-services" onClick={() => window.scrollTo(0, 0)}>POS Software</Link></li>
                                            <li><Link to="/products/hrm-software-services" onClick={() => window.scrollTo(0, 0)}>HRM Software</Link></li>
                                        </ul>
                                    </div>

                                    {/* Location */}
                                    <div className="col-lg-3 col-md-4 footer-item last-item">
                                        <h4>Location</h4>
                                        <div className="contact-form">
                                            {/* Uncomment the iframe below if needed */}
                                            {/* <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe> */}
                                            <h5>Pakistan</h5>
                                            <p>71-C3 Gulberg III Lahore, Pakistan</p>
                                            <h5>Saudi Arabia</h5>
                                            <p>RFKA8374, 8374 Salman Al Farisi, 4251 Al Khaleej Dist, 13223 Riyadh, Kingdom of Saudi Arabia</p>
                                        </div>
                                    </div>
                                    <div className="rs-video whatsapp-fixed">
                                        <div className="animate-border">
                                            <a
                                                alt="Whatsapp"
                                                className="video-vemo-icon btn-whatsapp"
                                                aria-label="WhatsApp"
                                                href={formattedPhone}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-whatsapp"></i>
                                                <div className="sm-red-dot"></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>

                        <div className="sub-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p>
                                            Copyright &copy; 2019-{currentYear} Prismatic-Technologies. All Rights Reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Footer