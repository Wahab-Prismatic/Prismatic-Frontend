import React from 'react';
import CareerImg from '../assets/images/Career.jpg';
import '../assets/css/Career.css';

const Career = () => {
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
        </>
    )
}

export default Career