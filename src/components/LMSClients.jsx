import React from 'react';
// Images
import questLogo from '../assets/images/clients/quest-logo.webp';
import gulabdeviLogo from '../assets/images/clients/gulabdevi.webp';
import pnyLogo from '../assets/images/clients/PNY Trainings.webp';
import mukabbirLogo from '../assets/images/clients/Mukabbir.webp';
import alAleemLogo from '../assets/images/clients/Logos-20.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';

const LMSClients = () => {
    return (
        <div className="container previous-section">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="hrm-clients-section">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
                            pagination={{ clickable: true }}
                            navigation={true}
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
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                            }}
                            className="custom-swiper"
                        >
                            <SwiperSlide>
                                <div className="swiper-slide-content">
                                    <img
                                        src={questLogo}
                                        alt="Quest for Exams"
                                        className="img-fluid client-logo"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide-content">
                                    <img
                                        src={gulabdeviLogo}
                                        alt="Gulabdevi"
                                        className="img-fluid client-logo"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide-content">
                                    <img
                                        src={pnyLogo}
                                        alt="PNY Trainings"
                                        className="img-fluid client-logo"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide-content">
                                    <img
                                        src={mukabbirLogo}
                                        alt="Mukabbir"
                                        className="img-fluid client-logo"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="swiper-slide-content">
                                    <img
                                        src={alAleemLogo}
                                        alt="Al-Aleem"
                                        className="img-fluid client-logo"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LMSClients