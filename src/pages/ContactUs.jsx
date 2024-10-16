import { useState } from 'react';
import ContactImg from '../assets/images/Contact Us.jpg';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import '../assets/css/ContactUs.css';
import { locations, mapPath } from '../services';
import { Link } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:8000/api';
const ContactUs = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState([]);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        subject: '',
        message: '',
        'g-recaptcha-response': ''
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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert('Please verify the reCAPTCHA');
            return;
        }

        // Perform form validation
        let validationErrors = [];
        if (!formData.name) validationErrors.push("Full Name is required");
        if (!formData.email) validationErrors.push("Email is required");
        if (!formData.phone) validationErrors.push("Phone Number is required");
        if (!formData.companyName) validationErrors.push("Company Name is required");
        if (!formData.subject) validationErrors.push("Please select a subject");
        if (!formData.message) validationErrors.push("Message is required");

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        const dataToSend = {
            ...formData,
            'g-recaptcha-response': ''
        };

        try {
            const response = await axios.post('/contact-form', dataToSend);
            console.log("Form Data:", response);
            setSuccessMessage(response.data.message);
            setFormData({
                name: '',
                email: '',
                phone: '',
                companyName: '',
                subject: '',
                message: '',
                'g-recaptcha-response': ''
            });
            setSuccessMessage("Message sent Successfully!");
            setErrors([]);
        }
        catch (error) {
            if (error.response) {
                setErrors(error.response.data.message);
            } else {
                setErrors("An error occured while submitting the form.");
            }
        }

        // Reset the form
        setFormData({
            name: '',
            email: '',
            phone: '',
            companyName: '',
            subject: '',
            message: '',
            'g-recaptcha-response': ''
        });
    };

    return (
        <>
            <div className="products-header-wrapper">
                <img src={ContactImg} alt="contact-us" title="contact-us" draggable={false} />
                <div className="P-header-text text-content">
                    <h6>Contact Us</h6>
                    <h4>feel free to send us a message now!</h4>
                </div>
            </div>

            <div className="callback-form contact-us" id="mapcheck" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="row" style={{ background: '#E9EDF0' }}>
                        <div className="col-md-8 pt-4 pb-4">
                            {successMessage && <div className="alert alert-success success_alert" role="alert">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger danger_alert" role="alert">{errorMessage}</div>}
                            <div className="contact-form formchange" id="Contact">
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
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
                                                    <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
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
                                                    <span className="input-group-addon"><i className="fa fa-phone"></i></span>
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
                                                    <span className="input-group-addon"><i className="fa fa-building"></i></span>
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
                                                    <span className="input-group-addon"><i className="fa fa-laptop"></i></span>
                                                    <select
                                                        className="form-select"
                                                        id="wantToPurchase"
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
                                            <div className="form-group" style={{ textAlign: 'start' }}>
                                                <label htmlFor="message">Your Message:</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    name="message"
                                                    id="message"
                                                    style={{ resize: 'none', borderRadius: '10px' }}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group recaptcha-container">
                                                <ReCAPTCHA
                                                    name="g-recaptcha-response"
                                                    value={formData['g-recaptcha-response']}
                                                    sitekey='6LcuCLUcAAAAAOEjErKv3Uoj5foxMOSC5l-YL5b2'
                                                    onChange={onCaptchaChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <fieldset className="csm-form-info">
                                        <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 pr-0">
                            <div id="map_canvas" style={{ border: '2px solid #3872ac' }}>
                                <iframe
                                    src={mapPath}
                                    width="100%"
                                    height="100%"
                                    style={{ border: '0' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-information">
                <div className="container">
                    <div className="row">
                        {locations.map((location, index) => (
                            <div className="col-md-4 mb-3" key={index}>
                                <div className="contact-item">
                                    <h4>{location.country}</h4>
                                    <p>
                                        <i className="fa fa-map-marker"></i>
                                        <Link to="#mapcheck">{location.address}</Link>
                                    </p>
                                    <p>
                                        <i className="fa fa-phone"></i>
                                        <Link to={`tel:${location.phone.replace(/\s/g, '')}`}> {location.phone}</Link>
                                    </p>
                                    <p>
                                        <i className="fa fa-envelope"></i>
                                        <Link to={`mailto:${location.email}`}>{location.email}</Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs