// Import Swiper Modules
import { Swiper, SwiperSlide } from "swiper/react";
import clientsData from "../services/OurClientsService";
import '../assets/css/OurClientsSection.css';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
// Import Swiper CSS modules
import 'swiper/css';
import { Link } from "react-router-dom";

const OurClientsSection = () => {
    return (
        <div className="partners" data-aos="fade-up" data-aos-duration="3000">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2> OUR SATISFIED <em>CLIENTS</em></h2>
                            <hr style={{ width: '80px', marginTop: '0.5rem', height: '2px' }} />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="swiper-container">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                spaceBetween={40}
                                slidesPerView={6}
                                loop={true}
                                effect="fade"
                                speed={700}
                                breakpoints={{
                                    250: { slidesPerView: 1 },
                                    320: { slidesPerView: 2 },
                                    480: { slidesPerView: 2 },
                                    576: { slidesPerView: 3 },
                                    768: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 },
                                    1280: { slidesPerView: 5 },
                                    1440: { slidesPerView: 6 },
                                }}
                            >
                                {
                                    clientsData.map((client, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="partner-item">
                                                <Link to={client.href} target="_blank" >
                                                    <img
                                                        src={client.src}
                                                        loading="eager"
                                                        title={client.title}
                                                        alt={client.alt}
                                                    />
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClientsSection