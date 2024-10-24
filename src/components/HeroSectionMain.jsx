import './HeroSectionMain.css'
import Aos from 'aos';
import servicesData from '../services/HeroSectionService';
// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
// Import Swiper CSS modules
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShimmerDiv } from 'shimmer-effects-react';

const HeroSectionMain = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Aos.init();
        const timer = setTimeout(() => {
            setIsLoading(false); // Simulate content loading
        }, 1000); // Simulate 2 seconds loading time
        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    return (
        <>
            {
                isLoading ? (
                    <ShimmerDiv
                        mode="light"
                        height={500}
                        width="100%"
                    />
                ) : (
                    <div className="HeroSEc-main">
                        <div className="hero-wrap">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                autoplay={{ delay: 10000, disableOnInteraction: false }}
                                spaceBetween={50}
                                slidesPerView={1}
                            >
                                {servicesData.map((service, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="services-wrap">
                                            <div className="service-left">
                                                <h3>{service.title}</h3>
                                                <p>{service.description}</p>
                                                <Link to={service.link} className="Ser-btn p-read-more">
                                                    <button>Learn More</button>
                                                </Link>
                                            </div>
                                            <div className="service-right">
                                                <img src={service.imgSrc} alt={service.imgAlt} title="ERP-slide" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="wave-background">
                            <svg
                                id="wave"
                                style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
                                viewBox="0 0 1440 100"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                                        <stop stopColor="rgba(2, 116, 184, 1)" offset="0%" />
                                        <stop stopColor="rgba(2, 116, 184, 1)" offset="100%" />
                                    </linearGradient>
                                </defs>
                                <path
                                    style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                                    fill="url(#sw-gradient-0)"
                                    d="M0,60L17.1,63.3C34.3,67,69,73,103,66.7C137.1,60,171,40,206,40C240,40,274,60,309,65C342.9,70,377,60,411,53.3C445.7,47,480,43,514,40C548.6,37,583,33,617,38.3C651.4,43,686,57,720,65C754.3,73,789,77,823,71.7C857.1,67,891,53,926,48.3C960,43,994,47,1029,43.3C1062.9,40,1097,30,1131,23.3C1165.7,17,1200,13,1234,15C1268.6,17,1303,23,1337,30C1371.4,37,1406,43,1440,46.7C1474.3,50,1509,50,1543,48.3C1577.1,47,1611,43,1646,45C1680,47,1714,53,1749,51.7C1782.9,50,1817,40,1851,43.3C1885.7,47,1920,63,1954,58.3C1988.6,53,2023,27,2057,16.7C2091.4,7,2126,13,2160,13.3C2194.3,13,2229,7,2263,13.3C2297.1,20,2331,40,2366,40C2400,40,2434,20,2451,10L2468.6,0L2468.6,100L2451.4,100C2434.3,100,2400,100,2366,100C2331.4,100,2297,100,2263,100C2228.6,100,2194,100,2160,100C2125.7,100,2091,100,2057,100C2022.9,100,1989,100,1954,100C1920,100,1886,100,1851,100C1817.1,100,1783,100,1749,100C1714.3,100,1680,100,1646,100C1611.4,100,1577,100,1543,100C1508.6,100,1474,100,1440,100C1405.7,100,1371,100,1337,100C1302.9,100,1269,100,1234,100C1200,100,1166,100,1131,100C1097.1,100,1063,100,1029,100C994.3,100,960,100,926,100C891.4,100,857,100,823,100C788.6,100,754,100,720,100C685.7,100,651,100,617,100C582.9,100,549,100,514,100C480,100,446,100,411,100C377.1,100,343,100,309,100C274.3,100,240,100,206,100C171.4,100,137,100,103,100C68.6,100,34,100,17,100L0,100Z"
                                />
                            </svg>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default HeroSectionMain