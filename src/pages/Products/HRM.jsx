import React from 'react'
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/HRMS/hero-sec-img.webp';
import timesheetImg from '../../assets/images/HRMS/timesheet-hrm.webp';
import '../../assets/css/HRM.css';

const HRM = () => {
    return (
        <>
            <div className="hrm-hero section pt-0" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 mt-md-5">
                            <div className="d-flex justify-content-center flex-wrap flex-column h-100">
                                <h1>Unlock the Full Potential of Your Workforce</h1>
                                <p>Efficient, Scalable, and User-Friendly HR Solutions</p>
                                <div className="d-flex gap-4 request__btn">
                                    <Link
                                        to="https://prismatic-technologies.com/contact-us?service=hrm-software"
                                        className="btn hrm-register"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Request a demo
                                    </Link>
                                    <Link
                                        to="/Prismatic-HRMS-Software-Brochure.pdf"
                                        className="btn hrm-register hrm-expert-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => window.gtag_report_conversion(undefined)}
                                    >
                                        HRM Brochure
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 position-relative">
                            <link rel="preload" as="image" href={heroImg} />
                            <img src={heroImg} alt="hero-sec-img" className="img-fluid hero-sec-img mt-5" />
                            <link rel="preload" as="image" href={timesheetImg} />
                            <img src={timesheetImg} alt="timesheet-img" className="img-fluid timesheet-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HRM