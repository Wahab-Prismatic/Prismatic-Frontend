import { Link } from 'react-router-dom';
import DemoImg from '../../assets/images/erp/demo.png';
import PolgoneImg from '../../assets/images/erp/polgone.png';
import PrisHeroImg from '../../assets/images/erp/pris-hero-img.png';
import PolygoneImg from '../../assets/images/erp/polygon.png';
import EllipseImg from '../../assets/images/erp/Ellipse 2.png'
import CardImg from '../../assets/images/erp/card-img-1.png';
import '../../assets/css/ERP.css';
import { useEffect } from 'react';
import Aos from 'aos';

const ERP = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  const featuresData = [
    {
      image: CardImg,
      title: 'Productive Collaboration',
      description:
        'Our ERP software provides an effortless workflow, so data can be shared across departments. Better Communication = Better Decisions',
      aosDuration: 1000,
      customMarginClass: '',
    },
    {
      image: CardImg,
      title: 'Handles Costs and Finances',
      description:
        'Our ERP platform does all the financial work for you. From data automation to richly detailed financial reports, your business finances will be in check!',
      aosDuration: 2000,
      customMarginClass: 'mt-70',
    },
    {
      image: CardImg,
      title: 'Best Customer Experience',
      description:
        'Our software simplifies interaction with customers by monitoring their data and buying trends, so you can ALWAYS stay in the loop.',
      aosDuration: 3000,
      customMarginClass: 'mt-140',
    },
    {
      image: CardImg,
      title: 'Inventory Management',
      description:
        'Our ERP system tracks stock levels, automates reorders, and ensures you never run out of essential items. Keep your supply chain smooth and efficient!',
      aosDuration: 3000,
      customMarginClass: 'mt-210',
    },
  ];

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

      {/* <!-- ERP Features Start--> */}
      <div className="pris-features text-center section" id="features">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-12 mb-5">
              <h1>
                Transform Your Operations with <br /> Cutting-Edge{' '}
                <span className="pri-accent">ERP Features</span>
              </h1>
              <p>
                Instead of addressing ERP development as just a technical project, our consulting team sees
                it as a business transformation process, where ERP technology adoption starts the flywheel of positive
                changes for your business.
              </p>
            </div>

            {featuresData.map((feature, index) => (
              <div
                key={index}
                className={`col-md-6 col-lg-3 mb-3 ${feature.customMarginClass}`}
                data-aos="flip-down"
                data-aos-duration={feature.aosDuration}
              >
                <div className="cards-container">
                  <div className="cards">
                    <div className="pris-cards text-center">
                      <img src={feature.image} alt={feature.title} className="img-fluid mb-4" />
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      {/* <!-- ERP Features End--> */}

      {/* <!-- Connect with Expert Start --> */}
      <div className="pris-connect-us section" id="">
        <div className="container">
          <div className="col-md-12 text-center">
            <h1>
              Get Started!
            </h1>
            <p>
              Connect with our experienced and proficient Tech Experts today to explore how Prismatic can take your
              technology, business, and operations to subsequent levels.
            </p>
            <Link to="/contact-us" className="btn pris-inquire-btn">
              Inquire Now
              <img src="/assets/images/erp/demo-2.png" alt="" className="demo-img" />
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Connect with Expert End --> */}
    </>
  )
}

export default ERP;