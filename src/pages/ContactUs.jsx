import { useState } from 'react';
import ContactImg from '../assets/images/Contact Us.jpg';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/api';
const ContactUs = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        companyName: '',
        wantToPurchase: '',
        message: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform form validation
        let validationErrors = [];
        if (!formData.fullname) validationErrors.push("Full Name is required");
        if (!formData.email) validationErrors.push("Email is required");
        if (!formData.phone) validationErrors.push("Phone Number is required");
        if (!formData.companyName) validationErrors.push("Company Name is required");
        if (!formData.wantToPurchase) validationErrors.push("Please select a service");
        if (!formData.message) validationErrors.push("Message is required");

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('/contact-form', formData);
            console.log("Form Data:", response);
            setSuccessMessage(response.data.message);
            setFormData({
                fullname: '',
                email: '',
                phone: '',
                companyName: '',
                wantToPurchase: '',
                message: '',
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
            fullName: '',
            email: '',
            phone: '',
            companyName: '',
            wantToPurchase: '',
            message: ''
        });
    };

    return (
        <>
            <div className="products-header-wrapper">
                <img src={ContactImg} alt="contact-us" title="contact-us" />
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
                                                        name="fullname"
                                                        placeholder="Full Name"
                                                        value={formData.fullname}
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
                                                        className="form-control"
                                                        id="wantToPurchase"
                                                        name="wantToPurchase"
                                                        value={formData.wantToPurchase}
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
                                                    style={{ resize: 'none' }}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-12 form-group">
                      <NoCaptcha
                        sitekey="YOUR_SITE_KEY" // Add your site key here
                        onChange={handleRecaptcha}
                      />
                    </div> */}
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
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4964.705173448318!2d74.33773501337656!3d31.505074701447967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190520e18b8a9b%3A0xb742d6f26c475776!2sPrismatic%20Technologies%20Limited!5e0!3m2!1sen!2s!4v1724412105254!5m2!1sen!2s"
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
        </>
    )
}

export default ContactUs