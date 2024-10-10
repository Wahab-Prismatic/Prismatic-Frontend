import { useRef, useState } from 'react';
import '../assets/css/Portfolio.css';
import PortfolioImg from '../assets/images/Portfolio.jpg';
import { Link } from 'react-router-dom';
// import { portfolioImages } from '../services';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
    // Create refs for each portfolio category
    const sectionRefs = useRef({});
    const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Track selected image index
    const [selectedImages, setSelectedImages] = useState([]); // Track images of the currently opened category

    const portfolios = {
        websites: [
            "../../src/assets/portfolio-images/website-portfolio/dunkin.jpg",
            "../../src/assets/portfolio-images/website-portfolio/winbid.jpg",
            "../../src/assets/portfolio-images/website-portfolio/topfix.jpg",
            "../../src/assets/portfolio-images/website-portfolio/timesCrimes.jpg",
            "../../src/assets/portfolio-images/website-portfolio/techzology.jpg",
            "../../src/assets/portfolio-images/website-portfolio/petandu.jpg",
            "../../src/assets/portfolio-images/website-portfolio/jfoster.jpg",
            "../../src/assets/portfolio-images/website-portfolio/aamc.jpg",
        ],
        digitalMarketing: [
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-1.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-4.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-14.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-12.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-5.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-6.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-8.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-9.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-10.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-11.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-13.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-2.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-7.jpg",
            "../../src/assets/portfolio-images/Digital-marketing-portfolio/digital-marketing-3.jpg",
    
    
    
            // add more images here as needed
        ],
        learningManagementSystem: [
            "../../src/assets/portfolio-images/lms-portfolio/aamc-lms.jpg",
            "../../src/assets/portfolio-images/lms-portfolio/pny-lms.jpg",
            "../../src/assets/portfolio-images/lms-portfolio/pris-lms.jpg",
        ],
        erpSoftware: [
            "../../src/assets/portfolio-images/ERP-portfolio/Al-ALEEM-MEDICAL-COLLEGE.webp",
            "../../src/assets/portfolio-images/ERP-portfolio/Dunkin-Donuts.webp",
            "../../src/assets/portfolio-images/ERP-portfolio/PNY.webp",
            "../../src/assets/portfolio-images/ERP-portfolio/Prismatic.webp",
            "../../src/assets/portfolio-images/ERP-portfolio/Zubeer.webp"
        ],
    };

    // Function to open the modal with the selected image index
    const handleImageClick = (index, images) => {
        setSelectedImageIndex(index);
        setSelectedImages(images);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    // Navigate to the next image
    const nextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % selectedImages.length);
        }
    };

    // Navigate to the previous image
    const prevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(
                (selectedImageIndex - 1 + selectedImages.length) % selectedImages.length
            );
        }
    };

    // Scroll function to particular portfolio
    const scrollToSection = (category) => {
        if (sectionRefs.current[category]) {
            sectionRefs.current[category].scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    const buttonsData = [
        { link: "#ecomerce", label: "E-Commerce" },
        { link: "#lms", label: "LMS" },
        { link: "#ERP", label: "ERP" },
        { link: "#website", label: "Websites" },
        { link: "#digital-mark", label: "Digital Marketing" }
    ];

    return (
        <>
            {/* <!-- Banner Starts Here --> */}
            <div className="products-header-wrapper">
                <img src={PortfolioImg} loading="lazy" alt="portfolio" title="portfolio" draggable={false} />
                <div className="P-header-text text-content">
                </div>
            </div>
            {/* <!-- Banner Ends Here --> */}
            {/* <!-- buttons-section start --> */}
            <div className="container-fluid">
                <div className="sec-buttons">
                    {buttonsData.map((button, index) => (
                        <div className="item" key={index}>
                            <Link to={button.link}>
                                <button className="pg-button" onClick={() => scrollToSection(button.label)} >{button.label}</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* <!-- buttons-section ends --> */}
            {/* <!-- Cards Sections START --> */}
            {/* <!-- WEBSITE SECTION START --> */}
            <div>
                {Object.entries(portfolios).map(([category, images], categoryIndex) => (
                    <div key={categoryIndex} className="product-section container" ref={(el) => (sectionRefs.current[category] = el)}>
                        <h1 style={{ fontSize: "24px", fontWeight: "bold", padding: "25px 0" }}>
                            {category.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                        </h1>
                        <div className="card-wrapper gallery row">
                            {images.map((src, index) => (
                                <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                                    <div className="p-card">
                                        <div className="image-icon" style={{ position: "relative" }}>
                                            <a href="#!" onClick={(e) => { e.preventDefault(); handleImageClick(index, images); }}>
                                                <img
                                                    className="p-image img-fluid"
                                                    loading="lazy"
                                                    src={src}
                                                    alt={`${category} Portfolio`}
                                                    draggable={false}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

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

                            {/* Display the selected image */}
                            <img
                                src={selectedImages[selectedImageIndex]}
                                alt=""
                                className="modal-image"
                                draggable={false}
                            />

                            {/* Right arrow for navigating images */}
                            <span className="arrow right-arrow" onClick={nextImage}>
                                <i className="fa fa-chevron-right"></i>
                            </span>

                            {/* Display image number */}
                            <div className="image-number">
                                {selectedImageIndex + 1} / {selectedImages.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Portfolio