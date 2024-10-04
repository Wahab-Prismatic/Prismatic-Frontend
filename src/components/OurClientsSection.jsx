// Import Swiper Modules
import { Swiper, SwiperSlide } from "swiper/react";
import clientsData from "../services/OurClientsService";
import './OurClientsSection.css';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
// Import Swiper CSS modules
import 'swiper/css';

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
                            >
                                {
                                    clientsData.map((client, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="partner-item">
                                                <a href={client.href} target="_blank" >
                                                    <img
                                                        src={client.src}
                                                        loading="lazy"
                                                        title={client.title}
                                                        alt={client.alt}
                                                    />
                                                </a>
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