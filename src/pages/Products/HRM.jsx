import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/HRMS/hero-sec-img.webp';
import timesheetImg from '../../assets/images/HRMS/timesheet-hrm.webp';
// Import each client logo
import dunkinDonutLogo from '../../assets/images/HRMS/clients/dunkin-donut-logo.webp';
import alFatahLogo from '../../assets/images/HRMS/clients/al-fatah.webp';
import papaJohnLogo from '../../assets/images/HRMS/clients/papa-john.webp';
import greenWoodLogo from '../../assets/images/HRMS/clients/green-wood-logo.webp';
import aamcLogo from '../../assets/images/HRMS/clients/aamc-logo.webp';
import fastLogo from '../../assets/images/HRMS/clients/fast-logo.webp';
import growingBusinessImg from '../../assets/images/HRMS/growing-business.webp';
import '../../assets/css/HRM.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';

const HRM = () => {
    const clientLogos = [
        { src: dunkinDonutLogo, alt: "Dunkin-donuts" },
        { src: alFatahLogo, alt: "Al-fateh" },
        { src: papaJohnLogo, alt: "Papa-johns" },
        { src: greenWoodLogo, alt: "Greenwood" },
        { src: aamcLogo, alt: "Al-aleem" },
        { src: fastLogo, alt: "Fast-logo" },
    ];

    const whyPrisData = {
        title: "Why Prismatic's HRM is the Preferred Choice for",
        subtitle: "Growing Businesses",
        imageUrl: growingBusinessImg
    };

    const features = [
        { title: "All-in-One Solution", description: "From recruitment to retirement, manage every aspect of HR in one place." },
        { title: "Seamless Integration", description: "Easily integrate with your existing tools and platforms, ensuring a smooth transition." },
        { title: "Data-Driven Decisions", description: "Leverage real-time analytics to make informed decisions that drive business growth." },
        { title: "User-Centric Design", description: "Intuitive and easy to navigate, our software is designed with your team in mind." },
    ]
    return (
        <>
            {/* <!-- hero-section Start --> */}
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
                            <link rel="preload" as="image" href={heroImg} draggable={false} />
                            <img src={heroImg} alt="hero-sec-img" className="img-fluid hero-sec-img mt-5" draggable={false} />
                            <link rel="preload" as="image" href={timesheetImg} draggable={false} />
                            <img src={timesheetImg} alt="timesheet-img" className="img-fluid timesheet-img" draggable={false} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- hero-section End --> */}
            {/* <!-- Our Clients start --> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="hrm-clients-section bg-white">
                            <Swiper
                                className="slider"
                                freeMode={true}
                                modules={[Autoplay, FreeMode]}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                slidesPerView={5}
                                spaceBetween={30}
                                loop={true}
                                breakpoints={{
                                    300: {
                                        slidesPerView: 2,
                                        spaceBetween: 10
                                    },
                                    480: {
                                        slidesPerView: 2,
                                        spaceBetween: 10
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                        spaceBetween: 40,
                                    },
                                }}
                            >
                                {clientLogos.map((logo, index) => (
                                    <SwiperSlide key={index} className="slide client-slide">
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            className="img-fluid"
                                            loading="lazy"
                                            style={{ width: '122px' }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Our Clients Ends --> */}
            {/* <!-- Why Prismatic start --> */}
            <div className="hrm-why-pri" id="HRM">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mx-auto">
                            <h1 className="pri-main-h text-center">
                                {whyPrisData.title} <span className="pri-h pri-border">{whyPrisData.subtitle}</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 align-content-center">
                            {features.map((feature, index) => (
                                <div key={index} className="hrm-pri-data mt-4 mt-lg-4">
                                    <h2>{feature.title}</h2>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img
                                src={whyPrisData.imageUrl || growingBusinessImg}
                                alt="growing-business-img"
                                className="img-fluid hrm-growing-business"
                                width="670"
                                height="400"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Why Prismatic End --> */}
        </>
    )
}

export default HRM