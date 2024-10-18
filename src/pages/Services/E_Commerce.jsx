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

const E_Commerce = () => {

    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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

            <div className="container-fluid our-services-bg">
                <div className="row m-0">
                    <div className="container slider">
                        <div className="slide-track">
                            {/* Slide 1 */}
                            <div className="slide">
                                <img
                                    src={shopifyLogo}
                                    alt="shopify-logo"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                            {/* Slide 2 */}
                            <div className="slide">
                                <img
                                    src={laravelImg}
                                    alt="laravel-logo"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                            {/* Slide 3 */}
                            <div className="slide">
                                <img
                                    src={bigCommerceImg}
                                    alt="bigcommerce-logo"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                            {/* Slide 4 */}
                            <div className="slide">
                                <img
                                    src={wordpressImg}
                                    alt="wordpress-logo"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                            {/* Slide 5 */}
                            <div className="slide">
                                <img
                                    src={netLogo}
                                    alt="net-logo"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                            {/* Repeat slides for a continuous effect */}
                            <div className="slide">
                                <img
                                    src={shopifyLogo}
                                    alt="shopify-logo"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={laravelImg}
                                    alt="laravel-logo"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                            <div className="slide">
                                <img
                                    src={bigCommerceImg}
                                    alt="bigcommerce-logo"
                                    className="img-fluid"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default E_Commerce