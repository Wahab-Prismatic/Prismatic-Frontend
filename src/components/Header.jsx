import { useEffect, useState } from 'react';
import { submitContactForm, clearMessages } from '../redux/slices/contactFormSlice';
import '../assets/css/Header.css';
import ReCAPTCHA from 'react-google-recaptcha';
import Navbar from '../common/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const { loading, successMessage, errorMessage, errors } = useSelector((state) => state.contactForm);

    const [captchaValue, setCaptchaValue] = useState(null);
    const [isTopbarVisible, setIsTopbarVisible] = useState(true);
    const [isTopbarHidden, setIsTopbarHidden] = useState(window.innerWidth <= 991);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        subject: '',
        message: '',
        'g-recaptcha-response': '6LdBk2kqAAAAAEOt1rERG-NjZACYjPaayoETj84x'
    });

    const services = {
        "erp-software": "ERP Software",
        "crm-software": "CRM Software",
        "lms-software": "LMS Software",
        "hrm-software": "HRM Software",
        "e-commerce-website": "E-Commerce Website",
        "mobile-application-development": "Mobile Application Development",
        "pos-system": "POS System",
        "digital-marketing": "Digital Marketing",
        "website-development": "Website Development",
        "customized-software-solutions": "Customized Software Solutions",
        "shopify": "Shopify",
        "wordpress": "WordPress"
    };


    useEffect(() => {
        dispatch(clearMessages());

        const handleResize = () => {
            setIsTopbarHidden(window.innerWidth <= 991);
        };

        // Attach the resize event listener
        window.addEventListener('resize', handleResize);

        // Check initial size on component mount
        handleResize();

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

    useEffect(() => {
        const handleScroll = () => {
            // Hide the topbar when scrolled down, show it when at the top
            if (window.scrollY > 70) {
                setIsTopbarVisible(false); // Hide the topbar
            } else {
                setIsTopbarVisible(true); // Show the topbar

            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle change input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle reCAPTCHA change
    const onCaptchaChange = (value) => {
        setCaptchaValue(value);
        setFormData((prevData) => ({
            ...prevData,
            'g-recaptcha-response': value,
        }))
    }

    // Handle from submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // if(!captchaValue) {
        //     alert('Please verify the reCAPTCHA');
        //     return;
        // }

        // Dispatch the form submission action
        dispatch(submitContactForm(formData));
    };

    return (
        <div>
            <header>
                {
                    isTopbarVisible && !isTopbarHidden && (
                        <div className="topbar" style={{ backgroundColor: '#0274b8' }}>
                            <div className="container">
                                <div className="top-content">
                                    <ul className="left-info">
                                        <li className="number num1" style={{ padding: '5px 10px', fontSize: '15px', display: 'flex', justifyContent: 'start', width: '38%' }}>
                                            <Link to="mailto:info@prismatic-technologies.com" className="phone-num">
                                                <i className="fa fa-envelope"></i>
                                                <span style={{ paddingLeft: '5px' }}>info@prismatic-technologies.com</span>
                                            </Link>
                                        </li>
                                        <li className="number" style={{ padding: '5px 10px', fontSize: '15px', display: 'flex', justifyContent: 'start', width: '50%' }}>
                                            <Link to="tel:923078881432" className="phone-num">
                                                <i className="fa fa-phone"></i>
                                                <span style={{ paddingLeft: '5px' }}>+923078881432</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item wraper" style={{ display: 'flex', justifyContent: 'end', width: '50%' }}>
                                            <a
                                                className="nav-link book-demo"
                                                data-bs-target="#registerModal1"
                                                data-bs-toggle="modal"
                                                // to="/contact-us"
                                                style={{ fontSize: '16px', backgroundColor: '#fff', color: '#0274b8', padding: '5px 23px', display: 'flex', alignItems: 'center', fontWeight: 600, cursor: 'pointer' }}
                                            >
                                                <span>Get a demo</span>
                                            </a>
                                            <div className="modal" tabIndex="-1" role="dialog" id="myModal"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* Modal Section Start */}
                <div id="registerModal1" className="modal-style-1 modal fade">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header p-0 mb-3 mt-3">
                                <h4 className="modal-title pl-3 pb-2">Enter Your Information</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="/post-inquiry-information" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                                    <div className="row">
                                    {successMessage && <div className="alert alert-success success_alert" role="alert">{successMessage}</div>}
                                    {errorMessage && <div className="alert alert-danger danger_alert" role="alert">{errorMessage}</div>}
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-user"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        placeholder="Full Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-envelope"></i>
                                                    </span>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        placeholder="Email Address"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-phone"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="phone"
                                                        placeholder="Phone Number"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-building"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="companyName"
                                                        placeholder="Company Name"
                                                        value={formData.companyName}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-laptop"></i>
                                                    </span>
                                                    <select
                                                        className="form-select"
                                                        id="want_to_purchase"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="" disabled>Select a Service</option>
                                                        {Object.entries(services).map(([key, service]) => (
                                                            <option key={key} value={service}>
                                                                {service}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Your Message:</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    name="message"
                                                    id="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    style={{ resize: 'none' }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 form-group">
                                            <div className="form-group recaptcha-container">
                                                <ReCAPTCHA
                                                name="g-recaptcha-response"
                                                value={formData['g-recaptcha-response']}
                                                    sitekey='6LdBk2kqAAAAAEOt1rERG-NjZACYjPaayoETj84x'
                                                    onChange={onCaptchaChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-primary btn-signin">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Section End */}
                <Navbar />
            </header>
        </div>
    )
}

export default Header