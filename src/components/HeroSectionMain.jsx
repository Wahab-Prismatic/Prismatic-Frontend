import './HeroSectionMain.css'
import Aos from 'aos';
import servicesData from '../services/HeroSectionService';
// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
// Import Swiper CSS modules
import 'swiper/css';
import { useEffect } from 'react';



const HeroSectionMain = () => {
    useEffect(() => {
        Aos.init();
    }, );

    return (
        <div className="HeroSEc-main">
            <div className="hero-wrap">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {
                        servicesData.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="services-wrap">
                                    <div className="service-left">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <a href={service.link} className="Ser-btn p-read-more"><button>Learn More</button></a>
                                    </div>
                                    <div className="service-right">
                                        <img src={service.imgSrc} alt={service.imgAlt} title="ERP-slide" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
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
                {/* <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 179, 11, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,72L15,76C30,80,60,88,90,80C120,72,150,48,180,48C210,48,240,72,270,78C300,84,330,72,360,64C390,56,420,52,450,48C480,44,510,40,540,46C570,52,600,68,630,78C660,88,690,92,720,86C750,80,780,64,810,58C840,52,870,56,900,52C930,48,960,36,990,28C1020,20,1050,16,1080,18C1110,20,1140,28,1170,36C1200,44,1230,52,1260,56C1290,60,1320,60,1350,58C1380,56,1410,52,1440,54C1470,56,1500,64,1530,62C1560,60,1590,48,1620,52C1650,56,1680,76,1710,70C1740,64,1770,32,1800,20C1830,8,1860,16,1890,16C1920,16,1950,8,1980,16C2010,24,2040,48,2070,48C2100,48,2130,24,2145,12L2160,0L2160,120L2145,120C2130,120,2100,120,2070,120C2040,120,2010,120,1980,120C1950,120,1920,120,1890,120C1860,120,1830,120,1800,120C1770,120,1740,120,1710,120C1680,120,1650,120,1620,120C1590,120,1560,120,1530,120C1500,120,1470,120,1440,120C1410,120,1380,120,1350,120C1320,120,1290,120,1260,120C1230,120,1200,120,1170,120C1140,120,1110,120,1080,120C1050,120,1020,120,990,120C960,120,930,120,900,120C870,120,840,120,810,120C780,120,750,120,720,120C690,120,660,120,630,120C600,120,570,120,540,120C510,120,480,120,450,120C420,120,390,120,360,120C330,120,300,120,270,120C240,120,210,120,180,120C150,120,120,120,90,120C60,120,30,120,15,120L0,120Z"></path></svg>
			<svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(2, 116, 184, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,72L15,76C30,80,60,88,90,80C120,72,150,48,180,48C210,48,240,72,270,78C300,84,330,72,360,64C390,56,420,52,450,48C480,44,510,40,540,46C570,52,600,68,630,78C660,88,690,92,720,86C750,80,780,64,810,58C840,52,870,56,900,52C930,48,960,36,990,28C1020,20,1050,16,1080,18C1110,20,1140,28,1170,36C1200,44,1230,52,1260,56C1290,60,1320,60,1350,58C1380,56,1410,52,1440,54C1470,56,1500,64,1530,62C1560,60,1590,48,1620,52C1650,56,1680,76,1710,70C1740,64,1770,32,1800,20C1830,8,1860,16,1890,16C1920,16,1950,8,1980,16C2010,24,2040,48,2070,48C2100,48,2130,24,2145,12L2160,0L2160,120L2145,120C2130,120,2100,120,2070,120C2040,120,2010,120,1980,120C1950,120,1920,120,1890,120C1860,120,1830,120,1800,120C1770,120,1740,120,1710,120C1680,120,1650,120,1620,120C1590,120,1560,120,1530,120C1500,120,1470,120,1440,120C1410,120,1380,120,1350,120C1320,120,1290,120,1260,120C1230,120,1200,120,1170,120C1140,120,1110,120,1080,120C1050,120,1020,120,990,120C960,120,930,120,900,120C870,120,840,120,810,120C780,120,750,120,720,120C690,120,660,120,630,120C600,120,570,120,540,120C510,120,480,120,450,120C420,120,390,120,360,120C330,120,300,120,270,120C240,120,210,120,180,120C150,120,120,120,90,120C60,120,30,120,15,120L0,120Z"></path></svg> */}
            </div>
        </div>
    )
}

export default HeroSectionMain