import React, { useState } from 'react';
import CareerImg from '../assets/images/Career.jpeg';
import '../assets/css/CareerForm.css';
import { Link } from 'react-router-dom';

const CareerForm = () => {
    const [formData, setFormData] = useState({
        // job_title: '',
        // job_desc: '',
        // years_of_experiance: '',
        // job_resp: '',
        apply_email: '',
        apply_name: '',
        apply_dob: '',
        apply_m_status: '',
        apply_gender: '',
        apply_cellno: '',
        apply_p_address: '',
        apply_c_address: '',
        apply_job_type: '',
        apply_cnic: '',
        apply_degree: '',
        apply_study_status: '',
        apply_institute: '',
        apply_work_exp: '',
        apply_exp_salary: '',
        apply_resp: '',
        cv_pdf: null
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? e.target.files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare form data
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            const response = await fetch('/api/post-career', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Post Data', result);
                setSuccessMessage('Your record has been added successfully..!');
                setErrorMessage('');
            } else {
                setErrorMessage('Failed to add your record. Please try again.');
                setSuccessMessage('');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('An error occurred. Please try again.');
            setSuccessMessage('');
        }
    };
    return (
        <>
            <div className="products-header-wrapper">
                <img src={CareerImg} alt="Career" />
                <div className="P-header-text text-content">
                    <h6></h6>
                    <h4>Career</h4>
                </div>
            </div>
            <div className="more-info about-info">
                <div id="content" className="no-top">
                    <div className="container text-handle">
                        <div className="section-title" data-aos="fade-up" style={{ marginTop: '47px' }}>
                            <h2>Apply Now</h2>
                            <p></p>
                        </div>
                        <p style={{ textAlign: 'center' }}></p>
                        <br />

                        {successMessage && <p className="alert alert-info">{successMessage}</p>}
                        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}

                        <div className="row">
                            <div className="col-md-12 apply-form">
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <h4 style={{ textAlign: 'left', fontSize: '16px', marginTop: '20px' }}>Account Information:</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Email:</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="email@email.com"
                                                    name="apply_email"
                                                    value={formData.apply_email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="John Brian"
                                                    name="apply_name"
                                                    value={formData.apply_name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <h4 style={{ textAlign: 'left', fontSize: '16px' }}>Personal Information</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Date Of Birth:</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    name="apply_dob"
                                                    value={formData.apply_dob}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Marital Status:</label>
                                                <select
                                                    className="form-control"
                                                    name="apply_m_status"
                                                    value={formData.apply_m_status}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="Single">Single</option>
                                                    <option value="Married">Married</option>
                                                    <option value="Widowed">Widowed</option>
                                                    <option value="Divorced">Divorced</option>
                                                    <option value="Separated">Separated</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Gender:</label>
                                                <select
                                                    className="form-control"
                                                    name="apply_gender"
                                                    value={formData.apply_gender}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="M">Male</option>
                                                    <option value="F">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Phone#:</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="03010000000"
                                                    name="apply_cellno"
                                                    value={formData.apply_cellno}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Permanent Address:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="1446 Beatty Ave, Cambrige OH 43725"
                                                    name="apply_p_address"
                                                    value={formData.apply_p_address}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Current Address:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="1446 Beatty Ave, Cambrige OH 43725"
                                                    name="apply_c_address"
                                                    value={formData.apply_c_address}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>CNIC:</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="00000-0000000-0"
                                                    name="apply_cnic"
                                                    value={formData.apply_cnic}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Job Type:</label>
                                                <select
                                                    className="form-control"
                                                    name="apply_job_type"
                                                    value={formData.apply_job_type}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="Frontend Developer">Frontend Developer</option>
                                                    <option value=".Net Developer">.Net Developer</option>
                                                    <option value="Laravel Developer">Laravel Developer</option>
                                                    <option value="Quality Assurance">Quality Assurance</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 style={{ textAlign: 'left', fontSize: '16px' }}>Academic Information</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Currently Studying:</label>
                                                <select
                                                    className="form-control"
                                                    name="apply_study_status"
                                                    value={formData.apply_study_status}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="No">No</option>
                                                    <option value="Yes">Yes</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Degree:</label>
                                                <select
                                                    className="form-control"
                                                    name="apply_degree"
                                                    value={formData.apply_degree}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="Non-Matriculation">Non-Matriculation</option>
                                                    <option value="Matriculation/O-Level">Matriculation/O-Level</option>
                                                    <option value="Intermediate/A-Level">Intermediate/A-Level</option>
                                                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                                                    <option value="Master's Degree">Master's Degree</option>
                                                    <option value="Doctorate">Doctorate</option>
                                                    <option value="Certificate">Certificate</option>
                                                    <option value="Diploma">Diploma</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Institution:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Institute"
                                                    name="apply_institute"
                                                    value={formData.apply_institute}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <h4 style={{ textAlign: 'left', fontSize: '16px' }}>Work Experience</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Work Experience:</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    name="apply_work_exp"
                                                    value={formData.apply_work_exp}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <h4 style={{ textAlign: 'left', fontSize: '16px' }}>General Information</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Expected Salary:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="apply_exp_salary"
                                                    value={formData.apply_exp_salary}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>How did you hear about us?:</label>
                                                <select
                                                    className="form-control"
                                                    name="apply_resp"
                                                    value={formData.apply_resp}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Word of Mouth">Word of Mouth</option>
                                                    <option value="Referral">Referral</option>
                                                    <option value="Job Fair">Job Fair</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Upload CV:</label>
                                                <input
                                                    type="file"
                                                    className="form-control-file"
                                                    name="cv_pdf"
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="submit" className="btn form-sub">Submit</button>
                                        <Link to="/career" className="btn form-sub">Back</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerForm