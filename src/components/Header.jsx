import { useEffect, useState } from 'react'
import './Header.css';
import ReCAPTCHA from 'react-google-recaptcha';
import Navbar from '../common/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    const [captchaValue, setCaptchaValue] = useState(null);
    const [isTopbarVisible, setIsTopbarVisible] = useState(true);
    const [isTopbarHidden, setIsTopbarHidden] = useState(window.innerWidth <= 991);
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        Company_name: '',
        want_to_purchase: '',
        message: ''
    });

    useEffect(() => {
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
    }, []);

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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle reCAPTCHA change
    const onCaptchaChange = (value) => {
        setCaptchaValue(value);
    }

    // Handle from submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert('Please verify the reCAPTCHA');
            return;
        }

        console.log('Form data:', formData);
        console.log('reCAPTCHA value:', captchaValue);

        // Clear form fields
        setFormData({
            full_name: '',
            email: '',
            phone: '',
            Company_name: '',
            want_to_purchase: '',
            message: ''
        });
        setCaptchaValue(null);
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
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-user"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="full_name"
                                                        placeholder="Full Name"
                                                        value={formData.full_name}
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
                                                        name="Company_name"
                                                        placeholder="Company Name"
                                                        value={formData.Company_name}
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
                                                        className="form-control"
                                                        id="want_to_purchase"
                                                        name="want_to_purchase"
                                                        value={formData.want_to_purchase}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Software Required</option>
                                                        <option value="ERP Software">ERP Software</option>
                                                        <option value="CRM Software">CRM Software</option>
                                                        <option value="LMS Software">LMS Software</option>
                                                        <option value="E-Commerce Website">E-Commerce Website</option>
                                                        <option value="Mobile Application Development">Mobile Application Development</option>
                                                        <option value="POS System">POS System</option>
                                                        <option value="Digital Marketing">Digital Marketing</option>
                                                        <option value="Website Development">Website Development</option>
                                                        <option value="Customized Software Solutions">Customized Software Solutions</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="comment">Your Message:</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    name="message"
                                                    id="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    style={{ resize: 'none' }}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 form-group">
                                            <ReCAPTCHA
                                                sitekey='6LcuCLUcAAAAAOEjErKv3Uoj5foxMOSC5l-YL5b2'
                                                onChange={onCaptchaChange}
                                            />
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