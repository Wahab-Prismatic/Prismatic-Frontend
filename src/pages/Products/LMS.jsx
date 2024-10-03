import React from 'react'
import '../../assets/css/LMS.css';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/images/images/hero-img.webp';

const LMS = () => {
    return (
        <>
            {/* <!-- LMS Hero Section --> */}
            <div className="lms-hero" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 mt-lg-5">
                            <div className="d-flex justify-content-center flex-wrap flex-column h-100 custom-margin-lg">
                                <h1 className="mt-4">The <span className="lms-h-clr">best LMS</span> for personalized learning</h1>
                                <p className="mb-lg-4">Create engaging eLearning experiences with our customizable learning management system.
                                </p>
                                <Link to="/contact-us" className="btn lms-register mb-lg-5">Book a demo</Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 ">
                            <img src={HeroImg} alt="LMS-img" className="img-fluid" loading="lazy" draggable={false} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- LMS Hero Section end--> */}
        </>
    )
}

export default LMS