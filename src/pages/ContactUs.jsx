import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm, clearMessages } from '../redux/slices/contactFormSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { locations, mapPath } from '../services';
import { Link } from 'react-router-dom';
import '../assets/css/ContactUs.css';

import ContactImg from '../assets/images/Contact Us.jpg';

const ContactUs = () => {
    const dispatch = useDispatch();
    const { loading, successMessage, errorMessage } = useSelector((state) => state.contactForm);

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone Number is required'),
        companyName: Yup.string().required('Company Name is required'),
        subject: Yup.string().required('Please select a service'),
        message: Yup.string().required('Message is required'),
        'g-recaptcha-response': Yup.string().required('Please complete the reCAPTCHA'),
    });

    // Formik initial values
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        companyName: '',
        subject: '',
        message: '',
        'g-recaptcha-response': '',
    };

    useEffect(() => {
        dispatch(clearMessages());
    }, [dispatch]);

    const onCaptchaChange = (value, setFieldValue) => {
        setFieldValue('g-recaptcha-response', value);
    };

    const handleSubmit = (values) => {
        dispatch(submitContactForm(values));
    };

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
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ setFieldValue, errors, touched }) => (
                                        <Form>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <Field
                                                            type="text"
                                                            className={ `form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                                            name="name"
                                                            placeholder="Full Name"
                                                        />
                                                        <ErrorMessage name="name" component="div" className="text-danger" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <Field
                                                            type="email"
                                                            className={ `form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                                            name="email"
                                                            placeholder="Email Address"
                                                        />
                                                        <ErrorMessage name="email" component="div" className="text-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <Field
                                                            type="text"
                                                            className={ `form-control ${errors.phone && touched.phone ? 'is-invalid' : ''}`}
                                                            name="phone"
                                                            placeholder="Phone Number"
                                                        />
                                                        <ErrorMessage name="phone" component="div" className="text-danger" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <Field
                                                            type="text"
                                                            className={ `form-control ${errors.companyName && touched.companyName  ? 'is-invalid ' : ''}`}
                                                            name="companyName"
                                                            placeholder="Company Name"
                                                        />
                                                        <ErrorMessage name="companyName" component="div" className="text-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <Field as="select" className={ `form-select ${errors.subject && touched.subject ? 'is-invalid' : ''}`} name="subject">
                                                            <option value="" disabled>Select a Service</option>
                                                            {Object.entries(services).map(([key, service]) => (
                                                                <option key={key} value={service}>
                                                                    {service}
                                                                </option>
                                                            ))}
                                                        </Field>
                                                        <ErrorMessage name="subject" component="div" style={{ marginTop: '15px' }} className="text-danger" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group" style={{ textAlign: 'start' }}>
                                                        <label htmlFor="message">Your Message:</label>
                                                        <Field as="textarea"
                                                            className={`form-control ${errors.message && touched.message ? 'is-invalid' : ''}`}
                                                            rows="5"
                                                            name="message"
                                                            id="message"
                                                            style={{ resize: 'none', borderRadius: '10px' }}
                                                        />
                                                        <ErrorMessage name="message" component="div" style={{ marginTop: '15px' }} className="text-danger" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group recaptcha-container">
                                                        <ReCAPTCHA
                                                            name="g-recaptcha-response"
                                                            sitekey='6LdBk2kqAAAAAEOt1rERG-NjZACYjPaayoETj84x'
                                                            onChange={(value) => onCaptchaChange(value, setFieldValue)}
                                                        />
                                                        <ErrorMessage name="g-recaptcha-response" component="div" className="text-danger" />
                                                    </div>
                                                </div>
                                            </div>
                                            <fieldset className="csm-form-info">
                                                <button type="submit" id="form-submit" className="filled-button" disabled={loading}>
                                                    {loading ? 'Sending...' : 'Send Message'}
                                                </button>
                                            </fieldset>
                                        </Form>
                                    )}
                                </Formik>
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
    );
};

export default ContactUs;
