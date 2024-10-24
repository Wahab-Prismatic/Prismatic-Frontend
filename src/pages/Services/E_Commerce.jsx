import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/css/E_Commerce.css';

import shopifyImage from '../../assets/images/ecommerce/shopify-h-img.webp';
import storeImg from '../../assets/images/ecommerce/shopify-store-img.webp';
import themeDesignImg from "../../assets/images/ecommerce/theme-design.webp";
import seoImg from "../../assets/images/ecommerce/seo-optimization.webp";
import eCommImg from "../../assets/images/ecommerce/E-commerce-img.webp";
import ongoingSupportImg from "../../assets/images/ecommerce/ongoing-support-img.webp";
import analyticsImg from "../../assets/images/ecommerce/analytics-img.webp";
import shopifyLogo from '../../assets/images/ecommerce/shopify-logo.webp';
import laravelImg from '../../assets/images/ecommerce/laravel-img.webp';
import bigCommerceImg from '../../assets/images/ecommerce/bigcommerce.webp';
import wordpressImg from '../../assets/images/ecommerce/wordpress-img.webp';
import netLogo from '../../assets/images/ecommerce/net-logo.webp';
import BlokeWipe from '../../assets/images/ecommerce/Bloke-Wipes.webp';
import WindinfPortfolioImg from '../../assets/images/ecommerce/winbid-portfolio.webp';
import RafayleImg from '../../assets/images/ecommerce/rafayle-portfolio.webp';

import { cardData, testimonialsData } from '../../services';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const E_Commerce = () => {

    const sliderData = [
        { src: shopifyLogo, alt: "shopify-logo" },
        { src: laravelImg, alt: "laravel-logo" },
        { src: bigCommerceImg, alt: "bigcommerce-logo" },
        { src: wordpressImg, alt: "wordpress-logo" },
        { src: netLogo, alt: "net-logo" },
        // Repeat for continuous effect
        { src: shopifyLogo, alt: "shopify-logo" },
        { src: laravelImg, alt: "laravel-logo" },
        { src: bigCommerceImg, alt: "bigcommerce-logo" },
    ];

    return (
        <>
            <div className="container-fluid shopify-hero-section">
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="hero-sec-text h-100 d-flex flex-column justify-content-center align-items-center">
                                    <h1 className="shopify-h">
                                        Transform your online business with our{' '}
                                        <span className="shopify-h-2">expert Shopify services</span>
                                    </h1>
                                    <p>From setup to optimization, we’re here to help you succeed!</p>
                                    <Link
                                        to="/contact-us"
                                        className="shopify-cntct-btn"
                                    >
                                        Contact us
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="hero-sec-img">
                                    <img
                                        src={shopifyImage}
                                        alt="shopify-img"
                                        className="img-fluid"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shopify-features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="features">
                                <h1 className="shopify-h">
                                    <span className="shopify-h-2">All the features,</span>
                                    <br />
                                    without the hassle.
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="features-2">
                                <p>Shopify makes it easy to build and manage your online store.</p>
                                <Link
                                    to="/contact-us"
                                    className="shopify-cntct-btn"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* First Section: Shopify Store Setup */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shopify-store-1">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="shopify-store-data h-100 d-flex flex-column justify-content-center">
                                        <h1 className="shopify-h">
                                            <span className="shopify-h-2">Shopify Store Setup</span>
                                        </h1>
                                        <p>
                                            Launch your online store effortlessly! We manage everything from theme selection to product listing for a fully functional and appealing store.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="shopify-store-img text-center">
                                        <img
                                            src={storeImg}
                                            alt="shopify-store-img"
                                            className="img-fluid"
                                            loading="lazy"
                                            draggable={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section: Theme SEO Section */}
            <div className="theme-seo-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="shopify-theme">
                                <h1 className="shopify-heading">Custom Theme Design</h1>
                                <p className="shopify-para">
                                    Differentiate yourself with a unique, professionally designed Shopify theme that showcases your brand and engages customers.
                                </p>
                                <img
                                    src={themeDesignImg}
                                    alt="custom-theme-design"
                                    className="img-fluid"
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="shopify-theme shopify-Seo">
                                <h1 className="shopify-heading">Shopify SEO Optimization</h1>
                                <p className="shopify-para">
                                    Enhance your store's visibility with our SEO services, optimizing product descriptions and metadata to drive organic traffic and boost sales.
                                </p>
                                <img
                                    src={seoImg}
                                    alt="shopify-seo-optimization"
                                    className="img-fluid"
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Section: E-commerce Marketing */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shopify-store-1">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="shopify-store-data h-100 d-flex flex-column justify-content-center">
                                        <h1 className="shopify-h">
                                            <span className="shopify-h-2">E-commerce Marketing</span>
                                        </h1>
                                        <p>
                                            Elevate your brand with targeted marketing strategies, including social media and email campaigns to effectively reach your audience.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="shopify-store-img text-center">
                                        <img
                                            src={eCommImg}
                                            alt="E-commerce-img"
                                            className="img-fluid"
                                            loading="lazy"
                                            draggable={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fourth Section: Ongoing Support & Analytics */}
            <div className="theme-seo-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="shopify-theme">
                                <h1 className="shopify-heading">Ongoing Support & Maintenance</h1>
                                <p className="shopify-para">
                                    Enjoy continuous support to keep your Shopify store running smoothly, from troubleshooting to regular updates.
                                </p>
                                <img
                                    src={ongoingSupportImg}
                                    alt="ongoing-support-img"
                                    className="img-fluid"
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="shopify-theme shopify-Seo position-relative">
                                <h1 className="shopify-heading">Analytics & Reporting</h1>
                                <p className="shopify-para">
                                    Obtain valuable insights into your store's performance with detailed analytics, helping you understand customer behavior and refine your strategies.
                                </p>
                                <img
                                    src={analyticsImg}
                                    alt="analytics-img"
                                    className="img-fluid shopify-para-img"
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Our developement --> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="shopify-heading Our-developement">Our Core Development <br /> Technologies</h1>
                    </div>
                </div>
            </div>
            {/* <!--Our developement end--> */}
            {/* Slider Section Start */}
            <div className="container-fluid our-services-bg">
                <div className="row m-0">
                    <div className="container slider">
                        <div className="slide-track">
                            {sliderData.map((slide, index) => (
                                <div className="slide" key={index}>
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        className="img-fluid"
                                        loading="lazy"
                                        draggable={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider section end */}
            {/* <!-- Why choose us start --> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="why-choose-us">
                            <h1 className="shopify-heading choose-us-heading">Why Choose Us?</h1>
                            <p className="why-para">
                                We offer the best services to ensure high value to our clients.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        cardData.map((card, index) => (
                            <div className={`col-lg-3 col-md-6 mb-3 ${card.additionalClass} ${index === 0 ? 'firstCard' : ''}`} key={index}>
                                <div className={`team-cards justify-content-center text-center ${card.title.includes('Tailored') || card.title.includes('Results') ? 'team-cards-2' : ''}`}>
                                    <div className="team-card-img mb-4">
                                        <img src={card.imageSrc} alt={card.imgAlt} className="img-fluid" loading="lazy" draggable={false} />
                                    </div>
                                    <h2 dangerouslySetInnerHTML={{ __html: card.title }}></h2>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <!-- Why choose us end --> */}
            {/* Our Portfolio Section Start */}
            <div className="our-portfolio">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-lg-12">
                            <h1 className="shopify-heading choose-us-heading text-center">our portfolio</h1>
                            <p className="why-para text-center">
                                We offer the best services to ensure high value to our clients.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="portfolio mt-5">
                                <h1 className="shopify-heading portfolio-heading">
                                    bloke wipes shopify store
                                </h1>
                                <img
                                    src={BlokeWipe}
                                    alt="Bloke-Wipes"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="winbid-sec portfolio mt-xxxl-5 mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-2 mt-2">
                                <h1 className="shopify-heading portfolio-heading mb-0">
                                    winbid web <br /> application
                                </h1>
                                <img
                                    src={WindinfPortfolioImg}
                                    alt="winbid-portfolio"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                            <div className="Rafayel-web-sec portfolio mt-2">
                                <h1 className="shopify-heading portfolio-heading mb-0">
                                    Rafayel web <br /> application
                                </h1>
                                <img
                                    src={RafayleImg}
                                    alt="rafayle-portfolio"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Portfolio Section End */}

            {/* <!-- contact-us start --> */}
            <div className="container">
                <div className="row m-0">
                    <div className="col-lg-12">
                        <div className="contact-us-sec text-center">
                            <h3>Thinking about creating a new eCommerce site or migrating to Shopify?</h3>
                            <p>We’d love to learn more about your project!</p>
                            <Link
                                to="/contact-us"
                                className="shopify-cntct-btn contact-btn mx-auto"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial Section Start --> */}
            <div className="testimonial-section mb-4" id="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                pagination={{ clickable: true }}
                                navigation={true}
                                loop={true}
                                className="responsive"
                            >
                                {testimonialsData.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="slide-content">
                                            <div className="testimonial-wrap">
                                                <div className="testimonial_img">
                                                    <img
                                                        className="rounded-circle shadow-1-strong mb-2"
                                                        src={testimonial.imgSrc}
                                                        alt={testimonial.alt}
                                                        loading="lazy"
                                                        draggable={false}
                                                        style={{ width: '200px', height: '200px', border: '1px solid black', objectFit: 'cover'}}
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-center flex-wrap flex-column testimonial-data">
                                                    <p className="testimonial-para">
                                                        {testimonial.text}
                                                    </p>
                                                    <h4 className="testimonial-h">
                                                        {testimonial.name} - <span className="testimonial-h-2">{testimonial.position}</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial Section End --> */}
        </>
    )
}

export default E_Commerce