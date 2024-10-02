import { Link } from 'react-router-dom';
import DemoImg from '../../assets/images/erp/demo.png';
import PolgoneImg from '../../assets/images/erp/polgone.png';
import PrisHeroImg from '../../assets/images/erp/pris-hero-img.png';
import PolygoneImg from '../../assets/images/erp/polygon.png';
import EllipseImg from '../../assets/images/erp/Ellipse 2.png'
import '../../assets/css/ERP.css';

const ERP = () => {
  return (
    <>
      {/* // <!-- Hero Section Start --> */}
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
                  <img src={DemoImg} alt="demo" className="demo-img" draggable={false} loading="lazy" />
                </Link>
              </div>
              <img src={PolgoneImg} alt="polgon" className="img-fluid polygone-img" draggable={false} loading="lazy" />
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-5">
              <img
                src={PrisHeroImg}
                alt="polgone"
                className="img-fluid hero-ani-img"
                loading="lazy"
                draggable={false}
              />
              <img
                src={PolygoneImg}
                alt="polgone"
                className="img-fluid polygone-img2"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
      {/* // <!-- Hero Section End --> */}

      {/* //   <!-- About Prismatic-ERP Start --> */}
      <div className="About-pris section" id="about">
        <div className="container">
          <div className="row">
            {/* Left side image */}
            <div
              className="col-md-12 col-lg-5"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
            >
              <img
                src={EllipseImg}
                alt=""
                className="img-fluid about-pris-img"
                draggable={false}
              />
            </div>

            {/* Right side text */}
            <div
              className="col-md-12 col-lg-7"
              data-aos="fade-zoom-in"
              data-aos-duration="2000"
            >
              <div className="pris-about pris-about-ani">
                <h1>
                  <span className="pri-accent">About</span> Prismatic ERP
                </h1>
                <p className="mb-4">
                  Prismatic-ERP is the business evolution your company needs! As Pakistan's #1 accounting
                  software, we offer an all-in-one ERP system designed to enhance communication across departments,
                  boost productivity, and automate tedious tasks. <br />
                  We have been providing digital software solutions to customers from many industries. That’s the thing
                  about ERP software system – it can always be modified to fit what your business requires. <br />
                  Prismatic’s best accounting software in Pakistan does not come with a one-size fits all approach.
                </p>
                <a href="/contact-us" className="btn pri-demo-btn">
                  Inquire Now
                  <img src={DemoImg} draggable={false} alt="" className="demo-img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // <!-- About Prismatic-ERP End --> */}
    </>
  )
}

export default ERP;