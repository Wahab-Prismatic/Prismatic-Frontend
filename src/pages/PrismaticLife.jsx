import { BannerImages } from '../services';
// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
// Import Swiper CSS modules
import 'swiper/css';
import '../assets/css/PrismaticLife.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AwardImg from '../assets/activity-images/award-activity.jpeg';
import Img9020 from '../assets/prismatic-activity-images/IMG_9020.JPG';
import Img9042 from '../assets/prismatic-activity-images/IMG_9042.JPG';
import Img9046 from '../assets/prismatic-activity-images/IMG_9046.JPG';
import Img9153 from '../assets/prismatic-activity-images/IMG_9153.JPG';
import Img8803 from '../assets/prismatic-activity-images/IMG_8803.JPG';
import Img8804 from '../assets/prismatic-activity-images/IMG_8804.JPG';
import Img8889 from '../assets/prismatic-activity-images/IMG_8889.JPG';
import Img8993 from '../assets/prismatic-activity-images/IMG_8993.JPG';
import PicTourImg2 from '../assets/prismatic-activity-images/Picture-tour-2.jpg';
import PicNewYear from '../assets/prismatic-activity-images/Picture-new-year.jpg';
import PicNewYear2 from '../assets/prismatic-activity-images/Picture-new-year-2.jpg';
import PrisBannerImg from '../assets/prismatic-activity-images/pris-banner.png';
import Overlay from '../assets/activity-images/overlay-white-img.png';
import Img_9206 from '../assets/prismatic-activity-images/IMG_9206.JPG';
import Img_9196 from '../assets/prismatic-activity-images/IMG_9196.JPG';
import Img_9199 from '../assets/prismatic-activity-images/IMG_9199.JPG';
import Img_9200 from '../assets/prismatic-activity-images/IMG_9200.JPG';
import Img_9202 from '../assets/prismatic-activity-images/IMG_9202.JPG';
import Img_9204 from '../assets/prismatic-activity-images/IMG_9204.JPG';
import { useRef, useState } from 'react';

const PrismaticLife = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const sectionRefs = useRef({});

    // Scroll function to particular portfolio section
    // const scrollToSection = (category) => {
    //     if (sectionRefs.current[category]) {
    //         sectionRefs.current[category].scrollIntoView({
    //             behavior: "smooth",
    //             block: "start",
    //         });
    //     }
    // };

    // Modal open for selected image
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    // Close modal
    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    // Navigate to next image
    const nextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    // Navigate to previous image
    const prevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }
    };

    // Hover functions
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const images = [
        { src: Img_9206, href: Img_9206 },
        { src: Img_9196, href: Img_9196 },
        { src: Img_9199, href: Img_9199 },
        { src: Img_9200, href: Img_9200 },
        { src: Img_9202, href: Img_9202 },
        { src: Img_9204, href: Img_9204 },
    ];
    return (
        <>
            <div className="container-fluid p-0" style={{ position: 'relative' }}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    slidesPerView={1}
                    className="mySwiper"
                >
                    {BannerImages.map((image, index) => (
                        <SwiperSlide key={index} style={{ position: 'relative' }}>
                            <img
                                className="d-block w-100 images"
                                src={image.src}
                                alt={image.alt}
                                style={image.style}

                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="life-activity-overlay">
                    <div className="overlay-activity"></div>
                    <h5>LIFE AT PRISMATIC</h5>
                    <h2>A team that inspires you to be more.</h2>
                    <p>Working among the brightest minds in the industry is a powerful motivator.</p>
                </div>
            </div>
            <div className="container-fluid ourSpace" style={{ background: '#0274b8', marginBottom: '110px', paddingTop: '50px' }}>
                <div className="container">
                    <div className="row custom-style" style={{ paddingBottom: '200px' }}>
                        <div className="col-lg-6">
                            <div className="our-spaces">
                                <h3>Our Spaces</h3>
                                <p>
                                    Our goal is to provide the best possible environment for our employees, where they have a great time
                                    nourishing their creative side while loving every single minute of it. However, it will be challenging and
                                    you will be expected to do your very best.
                                </p>
                            </div>
                            <div className="row short-img-wrap">
                                <div className="col-sm-6 col-12 short-img">
                                    <img src={Img9020} alt="" style={{ width: '100%' }} draggable={false} />
                                </div>
                                <div className="col-sm-6 col-12 short-img">
                                    <img src={Img9042} alt="" style={{ width: '100%' }} draggable={false} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ position: 'relative' }}>
                            <div className="award-img">
                                <img src={AwardImg} className="img-fluid" alt="" style={{ width: '100%' }} draggable={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-3">
                        <img
                            src={PicTourImg2}
                            alt=""
                            style={{ width: "100%", borderRadius: '30px' }}
                            draggable={false}
                        />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <img
                            src={PicNewYear}
                            alt=""
                            style={{ width: "100%", borderRadius: '30px' }}
                            draggable={false}
                        />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <img
                            src={PicNewYear2}
                            alt=""
                            style={{ width: "100%", borderRadius: '30px' }}
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 mb-3">
                        <img
                            src={Img9153}
                            alt=""
                            style={{ width: "100%", borderRadius: '30px' }}
                            draggable={false}
                        />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 mb-3">
                        <img
                            src={Img8889}
                            alt=""
                            style={{ width: "100%", borderRadius: '30px' }}
                            draggable={false}
                        />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 mb-3">
                        <img
                            src={Img8993}
                            alt=""
                            style={{ width: "100%", borderRadius: '30px' }}
                            draggable={false}
                        />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 mb-3">
                        <img
                            src={Img9046}
                            alt=""
                            style={{ width: "100%", borderRadius: '30px' }}
                            draggable={false}
                        />
                    </div>

                    <div className="col-lg-8 col-md-8 col-sm-8 mb-3">
                        <img
                            src={Img8804}
                            alt=""
                            style={{ width: "100%", borderRadius: '30px' }}
                            draggable={false}
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 mb-3">
                        <div>
                            <img
                                src={Img8803}
                                alt=""
                                style={{ width: "100%", borderRadius: '30px' }}
                                draggable={false}
                            />
                        </div>
                        <div className="mt-3">
                            <img
                                src={Img9042}
                                alt=""
                                style={{ width: "100%", borderRadius: '30px' }}
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-3">
                        <img src={PrisBannerImg} alt="" style={{ width: '100%', borderRadius: '30px' }} draggable={false} />
                    </div>
                </div>
            </div>

            <div className="container">
                {/* Scrollable Portfolio Sections */}
                <div className="row gallery">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3"
                            ref={(el) => (sectionRefs.current[index] = el)}
                        >
                            <div
                                className="grid-img"
                                style={{ position: 'relative', borderRadius: '30px' }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href="#!" onClick={() => handleImageClick(index)}>
                                    <div className="plus-img">
                                        <div className={`overlay ${hoveredIndex === index ? 'show' : ''}`}></div>
                                        <img
                                            src={Overlay}
                                            alt=""
                                            style={{ width: '100%', opacity: hoveredIndex === index ? 1 : 0 }}
                                            draggable={false}
                                        />
                                    </div>
                                    <img
                                        src={image.src}
                                        alt=""
                                        style={{ width: '100%', borderRadius: '30px' }}
                                        draggable={false}
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for displaying selected image */}
                {selectedImageIndex !== null && (
                    <div className="modal-backdrop" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-icon" onClick={closeModal}>
                                <i className="fa fa-times"></i>
                            </span>

                            {/* Left arrow for navigating images */}
                            <span className="arrow left-arrow" onClick={prevImage}>
                                <i className="fa fa-chevron-left"></i>
                            </span>

                            {/* Display selected image */}
                            <img
                                src={images[selectedImageIndex].src}
                                alt="Selected"
                                className="modal-image"
                                draggable={false}
                            />

                            {/* Right arrow for navigating images */}
                            <span className="arrow right-arrow" onClick={nextImage}>
                                <i className="fa fa-chevron-right"></i>
                            </span>

                            {/* Display image number */}
                            <div className="image-number">
                                {selectedImageIndex + 1} / {images.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default PrismaticLife