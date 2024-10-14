import { Link } from 'react-router-dom';
import DemoImg from '../../assets/images/erp/demo.png';
import PolgoneImg from '../../assets/images/erp/polgone.png';
import PrisHeroImg from '../../assets/images/erp/pris-hero-img.png';
import PolygoneImg from '../../assets/images/erp/polygon.png';
import EllipseImg from '../../assets/images/erp/Ellipse 2.png'
import CardImg from '../../assets/images/erp/card-img-1.png';
import HealthCareImg from '../../assets/images/erp/Healthcare.png';
import ManufacturingImg from '../../assets/images/erp/Manufacturing-industry.png';
import BankingImg from '../../assets/images/erp/Banking.png';
import RetailImg from '../../assets/images/erp/Retail.png';
import Logo24Img from '../../assets/images/erp/our-clients/Logos-24.png';
import Logo13Img from '../../assets/images/erp/our-clients/Logos-13.png';
import Logo20Img from '../../assets/images/erp/our-clients/Logos-20.png';
import Logo18Img from '../../assets/images/erp/our-clients/Logos-18.png';
import Logo08Img from '../../assets/images/erp/our-clients/Logos-08.png';
import Logo10Img from '../../assets/images/erp/our-clients/Logos-10.png';
import Logo05Img from '../../assets/images/erp/our-clients/Logos-05.png';
import Logo07Img from '../../assets/images/erp/our-clients/Logos-07.png';
import Logo11Img from '../../assets/images/erp/our-clients/Logos-11.png';
import Logo12Img from '../../assets/images/erp/our-clients/Logos-12.png';
import Logo19Img from '../../assets/images/erp/our-clients/Logos-19.png';
import Logo03Img from '../../assets/images/erp/our-clients/Logos-03.png';
import Logo01Img from '../../assets/images/erp/our-clients/Logos-01.png';
import Logo02Img from '../../assets/images/erp/our-clients/Logos-02.png';
import Logo14Img from '../../assets/images/erp/our-clients/Logos-14.png';
import Logo15Img from '../../assets/images/erp/our-clients/Logos-15.png';
import Logo16Img from '../../assets/images/erp/our-clients/Logos-16.png';
import Logo22Img from '../../assets/images/erp/our-clients/Logos-22.png';
import Logo23Img from '../../assets/images/erp/our-clients/Logos-23.png';
import VideoPlayBtn from '../../assets/images/erp/video-ply-btn.webp';
import VideoPostureImg from '../../assets/images/erp/ERP-video-posture.png';
import ClientVideo from '../../assets/images/erp/ERP-Testimonial-video.mp4';
import '../../assets/css/ERP.css';
import { useEffect, useRef } from 'react';
import Aos from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const clientLogos = [
  { src: Logo24Img, alt: "client-logo-24" },
  { src: Logo13Img, alt: "client-logo-13" },
  { src: Logo20Img, alt: "client-logo-20" },
  { src: Logo18Img, alt: "client-logo-18" },
  { src: Logo08Img, alt: "client-logo-8" },
  { src: Logo10Img, alt: "client-logo-10" },
  { src: Logo05Img, alt: "client-logo-5" },
  { src: Logo07Img, alt: "client-logo-7" },
  { src: Logo11Img, alt: "client-logo-11" },
  { src: Logo12Img, alt: "client-logo-12" },
  { src: Logo19Img, alt: "client-logo-19" },
  { src: Logo03Img, alt: "client-logo-3" },
  { src: Logo01Img, alt: "client-logo-1" },
  { src: Logo02Img, alt: "client-logo-2" },
  { src: Logo14Img, alt: "client-logo-14" },
  { src: Logo15Img, alt: "client-logo-15" },
  { src: Logo16Img, alt: "client-logo-16" },
  { src: Logo22Img, alt: "client-logo-22" },
  { src: Logo23Img, alt: "client-logo-23" },
];

const ERP = () => {
  const videoRef = useRef(null);
  const playIconRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      playIconRef.current.style.display = 'none';
    } else {
      videoRef.current.pause();
      playIconRef.current.style.display = 'block';
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

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
                <Link to="/contact-us" className="btn pri-demo-btn" onClick={() => window.scrollTo(0,0)}>
                  Inquire Now
                  <img src={DemoImg} draggable={false} alt="" className="demo-img" />
                </Link>
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
            <Link to="/contact-us" className="btn pris-inquire-btn" onClick={() => window.scrollTo(0, 0)}>
              Inquire Now
              <img src={DemoImg} alt="" className="demo-img" />
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Connect with Expert End --> */}

      {/* <!-- Our Industries Start --> */}
      <div className="pris-industries section" id="industries">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4">
              <div className="d-flex justify-content-center flex-wrap flex-column align-items-center">
                <h3>Industries</h3>
                <h1 data-aos="fade-right" data-aos-duration="2000" className="aos-init aos-animate">
                  Let’s <span className="pri-accent connect-us-1">Our Industry Expertise and Solutions</span>
                </h1>
                <p>
                  Creating business value at the intersection of your industry transformation <br />
                  and today's latest technology innovation.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  350: {
                    slidesPerView: 1,
                  },
                  400: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 2, // 1 slide on small devices (mobile)
                  },
                  768: {
                    slidesPerView: 2, // 2 slides on medium devices (tablets)
                  },
                  992: {
                    slidesPerView: 3, // 3 slides on large devices (small desktops)
                  },
                  1200: {
                    slidesPerView: 4, // 4 slides on extra-large devices (large desktops)
                  },
                }}
                className="mySwiper justify-content-center"
              >
                <SwiperSlide>
                  <div className="slide-content">
                    <img src={HealthCareImg} alt="Healthcare" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div className="slide-content">
                    <img src={ManufacturingImg} alt="Manufacturing" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <img src={BankingImg} alt="Banking" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <img src={RetailImg} alt="Retail" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content">
                    <img src={ManufacturingImg} alt="Manufacturing" className="img-fluid" />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our Industries End --> */}

      {/* <!-- ERP Adoption start--> */}
      <div className="pris-connect-us section">
        <div className="container">
          <div className="col-md-12 text-center">
            <h1 className="mb-2">Make ERP adoption a lever driving your unstoppable business growth</h1>
            <Link to="/contact-us" className="btn pris-inquire-btn">
              Inquire Now
              <img src={DemoImg} alt="" className="demo-img" />
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- ERP Adoption end --> */}

      {/* <!-- Our Clients Start --> */}
      <div className="pris-clients section" id="clients">
        <div className="container">
          <div className="col-md-12 text-center">
            <h1>Our Clients</h1>
            <h2>A true Partnership is a two-way street</h2>
            <p className="mb-5 mt-3">
              Ideas and information flow openly and regularly, based on a foundation of mutual trust and
              respect for another's expertise. The best and most productive relationships are synergistic
              and goal-oriented, and a long-term relationship has the added value of deep-rooted industry
              and company knowledge. A true partnership is a two-way street.
            </p>
          </div>

          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="d-flex justify-content-center flex-wrap">
                {clientLogos.map((logo, index) => (
                  <div
                    key={index}
                    className={`logo-wrapper ${index % 2 === 1 ? "logo-wrapper-2" : ""}`}
                  >
                    <img src={logo.src} alt={logo.alt} className="img-fluid" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our Clients End --> */}

      {/* <!-- client's views start --> */}
      <div className="client-view section" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center mb-lg-4">
                what our Happy <span className="pri-accent">client says</span>
              </h1>
              <p className="mb-lg-5">
                ERP software is an integrated system used by businesses to manage and automate key processes, including
                finance, supply chain, manufacturing, procurement, and human resources. By centralizing data and workflows
                across departments, ERP systems enhance efficiency, improve decision-making, and provide real-time
                insights, helping organizations streamline operations and scale effectively.
              </p>
              <div className="pris-clients-vid text-center position-relative">
                <video
                  ref={videoRef}
                  id="aboutVideo"
                  src={ClientVideo}
                  playsInline
                  poster={VideoPostureImg}
                  onClick={handlePlay}
                />
                <div className="play-icon-about" ref={playIconRef} id="playIcon" onClick={handlePlay}>
                  <img src={VideoPlayBtn} alt="video-play-button" className="test-vid-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- client's views end --> */}
    </>
  )
}

export default ERP;