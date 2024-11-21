import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/BusinessSolsSection.css';

const BusinessSolsSection = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleVideoClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="more-info" data-aos-duration="3000">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="more-info-content">
                            <div className="row">
                                {/* YouTube Video Section */}
                                <div
                                    className="col-md-12 col-lg-6 mb-3"
                                    style={{ paddingRight: '0px', paddingLeft: '0px' }}
                                >
                                    <div
                                        className="embed-responsive embed-responsive-16by9 video-placeholder"
                                        onClick={handleVideoClick}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundImage: 'url(https://img.youtube.com/vi/6Q4u07NATvk/maxresdefault.jpg)',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '360px',
                                        }}
                                    >
                                        {!showVideo && (
                                            <button
                                                style={{
                                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '50%',
                                                    width: '60px',
                                                    height: '60px',
                                                    fontSize: '24px',
                                                }}
                                            >
                                                ▶
                                            </button>
                                        )}
                                        {showVideo && (
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src="https://www.youtube.com/embed/6Q4u07NATvk?modestbranding=1&autoplay=1&mute=1&showinfo=0&loop=1&playlist=6Q4u07NATvk"
                                                title="INTRODUCTION - PRISMATIC TECHNOLOGIES LIMITED"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        )}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div
                                    className="col-md-12 col-lg-6 mb-3 align-self-center"
                                    style={{ paddingRight: '0px', paddingLeft: '0px' }}
                                >
                                    <div className="right-content">
                                        <span>What we do</span>
                                        <h2 className="v-heading" style={{ fontSize: '34px' }}>
                                            Business <em>Solutions</em> catered to your needs
                                        </h2>
                                        <ul
                                            className="video-side-content"
                                            style={{ listStyle: 'square', paddingLeft: '20px' }}
                                        >
                                            <li>
                                                <em style={{ color: 'black' }}>
                                                    <Link
                                                        to="/products/learning-management-system"
                                                        onClick={() => window.scrollTo(0, 0)}
                                                    >
                                                        Learning Management System
                                                    </Link>
                                                </em>{' '}
                                                catered according to your institution
                                            </li>
                                            <li>
                                                <em style={{ color: 'black' }}>
                                                    <Link
                                                        to="https://www.prismatic-technologies.com/prismatic-crm-services"
                                                        target="_blank"
                                                        onClick={() => window.scrollTo(0, 0)}
                                                    >
                                                        Customer Relationship Management Software
                                                    </Link>
                                                </em>{' '}
                                                for your unique customer portfolio
                                            </li>
                                            <li>
                                                <em style={{ color: 'black' }}>
                                                    <Link
                                                        to="/products/erp-software-in-pakistan"
                                                        onClick={() => window.scrollTo(0, 0)}
                                                    >
                                                        Enterprise Resource Planning Software
                                                    </Link>
                                                </em>{' '}
                                                customized for your requirements
                                            </li>
                                            <li>
                                                <em style={{ color: 'black' }}>
                                                    <Link
                                                        to="/services/e-commerce-service"
                                                        onClick={() => window.scrollTo(0, 0)}
                                                    >
                                                        Website Development
                                                    </Link>
                                                </em>{' '}
                                                so you can grow your business
                                            </li>
                                            <li>
                                                <em style={{ color: 'black' }}>
                                                    E-commerce website/phone app
                                                </em>{' '}
                                                for improved customer experience
                                            </li>
                                        </ul>
                                        <Link
                                            to="/about-us"
                                            className="p-read-more"
                                            onClick={() => window.scrollTo(0, 0)}
                                        >
                                            <button>Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSolsSection;
