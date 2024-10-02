import React from 'react'
import { Link } from 'react-router-dom';
import DemoImg from '../../assets/images/erp/demo.png';
import PolgoneImg from '../../assets/images/erp/polgone.png';
import PrisHeroImg from '../../assets/images/erp/pris-hero-img.png';
import PolygoneImg from '../../assets/images/erp/polygon.png';
import '../../assets/css/ERP.css';

const ERP = () => {
  return (
    <div className="pris-hero-section mt-3 section" id="home">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 col-md-7">
            <div className="d-flex justify-content-center flex-wrap flex-column h-100">
              <div className="fade-in-text">
                <h1>
                  <span>ERP <br /></span>
                  Consulting <br /> Company
                </h1>
                <p>
                  Maximize the ROI of your enterprise Application Investments with Prismatic’s
                  team of certified Professionals in diverse industries
                </p>
              </div>
              <Link to="/contact-us" className="btn pri-demo-btn slid-btn">
                Request a demo
                <img src={DemoImg} alt="demo" className="demo-img" loading="lazy" />
              </Link>
            </div>
            <img src={PolgoneImg} alt="polgon" className="img-fluid polygone-img" loading="lazy" />
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-md-5">
            <img
              src={PrisHeroImg}
              alt="polgone"
              className="img-fluid hero-ani-img"
              loading="lazy"
            />
            <img
              src={PolygoneImg}
              alt="polgone"
              className="img-fluid polygone-img2"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ERP