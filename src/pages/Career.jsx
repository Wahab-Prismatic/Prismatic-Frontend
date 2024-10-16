import React, { useEffect, useState } from 'react';
import CareerImg from '../assets/images/Career.jpg';
import '../assets/css/Career.css';
import axios from 'axios';
import plusIcon from '../assets/images/plus.png';
import minusIcon from '../assets/images/minus.png';
import { Link } from 'react-router-dom';
import Aos from 'aos';

axios.defaults.baseURL = 'http://localhost:8000/api';
const Career = () => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        Aos.init();
        // Function to fetch carrers listing data
        const fetchCareersListing = async () => {
            try {
                const response = await axios.get('/admin/career-list', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                console.log('Career Data:', response.data);
                setCareers(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchCareersListing();
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* <!--Header Banner Starts Here --> */}
            <div className="products-header-wrapper">
                <img src={CareerImg} alt="career" title="career" draggable={false} />
                <div className="P-header-text text-content">
                    <h6></h6>
                    <h4>Career</h4>
                </div>
            </div>
            {/* <!--Header Banner End --> */}

            <div className="container">
                {/* Section Title */}
                <div className="section-title" data-aos="fade-up" style={{ marginTop: '47px' }}>
                    <h2>Open Positions</h2>
                    <span style={{ fontSize: '12px' }}>
                        Wear My Vest is bringing a sharper edge to the lifestyle of the Night Life, Entrepreneurs, Businesses,
                        and MC Communities across all nations; worldwide. All members will experience fast, accurate.
                    </span>
                    <p></p>
                </div>

                {/* Career List */}
                <div className="row" style={{ marginBottom: '50px' }}>
                    {careers.length > 0 ? (
                        careers.map((career, index) => (
                            <div className="col-lg-6 col-md-6" key={index}>
                                <div className="FAQBox mb-2">
                                    <h3 className="FAQTitle">
                                        {career.job_title}
                                        <span className="accordion-toggle">
                                            <img
                                                src={openIndex === index ? minusIcon : plusIcon}
                                                alt={openIndex === index ? 'Collapse' : 'Expand'}
                                                className={openIndex === index ? 'rotate' : ''}
                                                onClick={() => toggleAccordion(index)}
                                            />
                                        </span>
                                    </h3>
                                    {
                                        openIndex === index && (
                                            <div
                                                className="FaqParagraph"
                                                style={{
                                                    maxHeight: openIndex === index ? '900px' : '0',
                                                    overflowY: 'auto',
                                                    transition: 'max-height 0.3s ease-out',
                                                    // display: 'none'
                                                }}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: career.job_description }} />

                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No open positions available at the moment.</p>
                    )}

                    {/* Apply Button */}
                    <div
                        className="col-lg-12 col-md-12 apply-button"
                        style={{ justifyContent: 'center', display: 'flex', marginTop: '35px' }}
                    >
                        <Link to="/career-form" className="p-read-more">
                            <button style={{ padding: '12px 26px', fontSize: '18px' }}>Apply Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career