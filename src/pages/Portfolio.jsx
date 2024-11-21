import { useMemo, useRef, useState } from 'react';
import '../assets/css/Portfolio.css';
import PortfolioImg from '/images/Portfolio.webp';
import { Link } from 'react-router-dom';
// import { portfolioImages } from '../services';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';
import { useQuery } from '@tanstack/react-query';
// import { ShimmerDiv } from 'shimmer-effects-react';

const getImagePath = (imageName) => {
    try {
        const imageUrl = new URL(
            `/src/assets/portfolio-images/${imageName}`,
            import.meta.url
        ).href;
        return imageUrl;
    } catch (error) {
        return `/portfolio-images/${imageName}`;
    }
}

const fetchPortfolios = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {
                websites: [
                    'website-portfolio/dunkin.webp',
                    'website-portfolio/winbid.webp',
                    'website-portfolio/topfix.webp',
                    'website-portfolio/timesCrimes.webp',
                    'website-portfolio/techzology.webp',
                    'website-portfolio/petandu.webp',
                    'website-portfolio/jfoster.webp',
                    'website-portfolio/aamc.webp',
                ],
                digitalMarketing: [
                    'Digital-marketing-portfolio/digital-marketing-1.webp',
                    'Digital-marketing-portfolio/digital-marketing-4.webp',
                    'Digital-marketing-portfolio/digital-marketing-14.webp',
                    'Digital-marketing-portfolio/digital-marketing-12.webp',
                    'Digital-marketing-portfolio/digital-marketing-5.webp',
                    'Digital-marketing-portfolio/digital-marketing-6.webp',
                    'Digital-marketing-portfolio/digital-marketing-8.webp',
                    'Digital-marketing-portfolio/digital-marketing-9.webp',
                    'Digital-marketing-portfolio/digital-marketing-10.webp',
                    'Digital-marketing-portfolio/digital-marketing-11.webp',
                    'Digital-marketing-portfolio/digital-marketing-13.webp',
                    'Digital-marketing-portfolio/digital-marketing-2.webp',
                    'Digital-marketing-portfolio/digital-marketing-7.webp',
                    'Digital-marketing-portfolio/digital-marketing-3.webp',
                ],
                learningManagementSystem: [
                    'lms-portfolio/aamc-lms.webp',
                    'lms-portfolio/pny-lms.webp',
                    'lms-portfolio/pris-lms.webp',
                ],
                erpSoftware: [
                    'ERP-portfolio/Al-ALEEM-MEDICAL-COLLEGE.webp',
                    'ERP-portfolio/Dunkin-Donuts.webp',
                    'ERP-portfolio/PNY.webp',
                    'ERP-portfolio/Prismatic.webp',
                    'ERP-portfolio/Zubeer.webp'
                ],
            };
            resolve(data);
        }, 1000);
    });
};

// Image component with error handling
const PortfolioImage = ({ src, alt, onClick }) => {
    const [error, setError] = useState(false);
    const imagePath = getImagePath(src);

    return error ? (
        <div className="fallback-image">
            <div className="bg-gray-200 w-full h-48 flex items-center justify-center text-gray-500">
                Image not available
            </div>
        </div>
    ) : (
        <img
            className="p-image img-fluid"
            loading="eager"
            src={imagePath}
            alt={alt}
            draggable={false}
            onClick={onClick}
            onError={() => setError(true)}
        />
    );
};

const Portfolio = () => {
    // Create refs for each portfolio category
    const sectionRefs = useRef({});
    const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Track selected image index
    const [selectedImages, setSelectedImages] = useState([]); // Track images of the currently opened category
    // const [loadingModalImage, setLoadingModalImage] = useState(true);

    // Use React Query to fetch portfolio data
    const { data: portfolios, isLoading } = useQuery({
        queryKey: ['portfolios'],
        queryFn: fetchPortfolios,
    });

    // Function to open the modal with the selected image index
    const handleImageClick = (index, images) => {
        setSelectedImageIndex(index);
        setSelectedImages(images);
        // setLoadingModalImage(true);
        // Display shimmer for 500ms
        // setTimeout(() => {
            // setLoadingModalImage(false); // After 500ms, stop shimmer effect and load image
        // }, 1000);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedImageIndex(null);
        // setLoadingModalImage(true);
    };

    // Image loaded in the modal, hide shimmer
    const handleImageLoad = () => {
        // setLoadingModalImage(false); // Set to false when image is fully loaded
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

    // Map button labels to portfolio data categories
    const categoryMap = useMemo(() => ({
        'E-Commerce': 'websites',
        'LMS': 'learningManagementSystem',
        'ERP': 'erpSoftware',
        'Websites': 'websites',
        'Digital Marketing': 'digitalMarketing'
    }), []);

    // Scroll function to particular portfolio
    const scrollToSection = (categoryLabel) => {
        const category = categoryMap[categoryLabel];
        if (sectionRefs.current[category]) {
            sectionRefs.current[category].scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    // Memoize the buttonsData array
    const buttonsData = useMemo(() => [
        { link: "#ecommerce", label: "E-Commerce" },
        { link: "#lms", label: "LMS" },
        { link: "#erp", label: "ERP" },
        { link: "#website", label: "Websites" },
        { link: "#digital-mark", label: "Digital Marketing" }
    ], []);

    // Memoize the portfolio images for optimization
    const memoizedPortfolios = useMemo(() => portfolios || {}, [portfolios]);

    return (
        <>
            <div className="products-header-wrapper">
                <img src={PortfolioImg} loading="eager" alt="portfolio" title="portfolio" draggable={false} />
                <div className="P-header-text text-content"></div>
            </div>

            <div className="container-fluid">
                <div className="sec-buttons">
                    {buttonsData.map((button, index) => (
                        <div className="item" key={index}>

                            <Link to={button.link}>
                                <button
                                    className="pg-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(button.label);
                                    }}
                                >
                                    {button.label}
                                </button>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>

            <div>
                {isLoading ? (
                    // Render shimmer effect while loading
                    Array.from({ length: 6 }).map((_, index) => (
                        <>
                            <ShimmerSimpleGallery
                                key={index}
                                card={true}
                            />
                        </>
                    ))
                ) : (
                    Object.entries(memoizedPortfolios).map(([category, images], categoryIndex) => (
                        <div key={categoryIndex} className="product-section container" ref={(el) => (sectionRefs.current[category] = el)} id={category.toLowerCase()}>
                            <h1 style={{ fontSize: "24px", fontWeight: "bold", padding: "25px 0" }}>
                                {category.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                            </h1>
                            <div className="card-wrapper gallery row">
                                {images.map((src, index) => (
                                    <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                                        <div className="p-card">
                                            <div className="image-icon" style={{ position: "relative" }}>
                                                <a href="#!" onClick={(e) => { e.preventDefault(); handleImageClick(index, images); }}>
                                                    {/* <img
                                                        className="p-image img-fluid"
                                                        loading="lazy"
                                                        src={src}
                                                        alt={`${category} Portfolio`}
                                                        draggable={false}
                                                    /> */}
                                                    <PortfolioImage
                                                        className="p-image img-fluid"
                                                        src={src}
                                                        alt={`${category} Portfolio`}
                                                        onClick={() => handleImageClick(index, images)}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}

                {selectedImageIndex !== null && (
                    <div className="modal-backdrop" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-icon" onClick={closeModal}>
                                <i className="fa fa-times"></i>
                            </span>
                            <span className="arrow left-arrow" onClick={prevImage}>
                                <i className="fa fa-chevron-left"></i>
                            </span>
                            {/* <img src={selectedImages[selectedImageIndex]} alt="" className="modal-image" draggable={false} /> */}
                            {/* Show shimmer effect while loading image */}
                            {/* {loadingModalImage ? (
                                <ShimmerDiv mode="light" height={400} width={500} />
                            ) : ( */}
                                <PortfolioImage
                                    className="modal-image"
                                    src={selectedImages[selectedImageIndex]}
                                    alt="Selected portfolio item"
                                    onLoad={handleImageLoad} // Handle image load
                                />
                            {/* )} */}
                            <span className="arrow right-arrow" onClick={nextImage}>
                                <i className="fa fa-chevron-right"></i>
                            </span>
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