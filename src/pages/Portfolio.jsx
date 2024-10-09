import { useState } from 'react';
import '../assets/css/Portfolio.css';
import PortfolioImg from '../assets/images/Portfolio.jpg';
import { Link } from 'react-router-dom';
import { portfolioImages } from '../services';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to open the modal with the selected image
    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedImage(null);
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

            <div className="container-fluid">
                <div className="sec-buttons">
                    {buttonsData.map((button, index) => (
                        <div className="item" key={index}>
                            <Link to={button.link}>
                                <button className="pg-button">{button.label}</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="product-section container" id="website">
            <h1 style={{ fontSize: "24px", fontWeight: "bold", padding: "25px 0" }}>Websites</h1>
            <div className="card-wrapper gallery row">
                {portfolioImages.map((image) => (
                    <div key={image.id} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                        <div className="p-card">
                            <div className="image-icon" style={{ position: "relative" }}>
                                <Link onClick={(e) => { e.preventDefault(); handleImageClick(image.src); }}>
                                    <img
                                        className="p-image img-fluid"
                                        loading="lazy"
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for displaying selected image */}
            {selectedImage && (
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-icon" onClick={closeModal}>
                            <i className="fa fa-times"></i>
                        </span>
                        <img src={selectedImage} alt="" className="modal-image" draggable={false} />
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default Portfolio