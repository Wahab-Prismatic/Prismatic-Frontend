import { useEffect, useState } from 'react';
import CareerImg from '../assets/images/Career.jpeg';
import '../assets/css/CareerForm.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { clearForm, submitCareerForm, updateField } from '../redux/slices/careerFormSlice';

const CareerForm = () => {
    const dispatch = useDispatch();
    const [cvFile, setCvFile] = useState(null);
    const { formData = {}, loading, successMessage, errorMessage } = useSelector((state) => state.careerForm || {});

    useEffect(() => {
        Aos.init();
    }, []);

    const isValidCNIC = (value) => {
        const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;
        return cnicPattern.test(value);
    }

    // Form Valication Schema
    const validationSchema = Yup.object({
        apply_email: Yup.string().email('Invalid email format.').required('Email is requied.'),
        apply_name: Yup.string().min(3, "Name must be at least 3 characters.").required('Name is required.'),
        apply_dob: Yup.date().max(new Date(), "Date cannot be in future.").required('Date of birth is required.'),
        apply_m_status: Yup.string().required('Marital status is required.'),
        apply_gender: Yup.string().required('Gender is required.'),
        apply_cellno: Yup.string().matches(/^[0-9]{11}$/, 'Phone number must be 11 digits.').required('Phone number is required.'),
        apply_p_address: Yup.string().min(10, 'Address must be at least 10 characters.').required('Permanent address is required.'),
        apply_c_address: Yup.string().min(10, 'Address must be at least 10 characters.').required('Current address is required.'),
        apply_cnic: Yup.string().test('is-valid-cnic', 'CNIC must be 15 Alphanumeric character.', isValidCNIC).required('CNIC is required.'),
        apply_resp: Yup.string().required('Job type is required.'),
        apply_study_status: Yup.string().required('Study status is required.'),
        apply_degree: Yup.string().required('Degree is required.'),
        apply_institute: Yup.string().required('Institution is required.'),
        apply_experience: Yup.string().min(50, 'Please provide detailed work experience (min 50 characters)').required('Wrok experienceis required.'),
        apply_exp_salary: Yup.string().required('Expected Salary is required.'),
        // hearing_source: Yup.string().required('Hearing source status is required'),
        cv_pdf: Yup.mixed().required('CV is required.')
            .test('fileFormat', 'OnlyPDF files are allowed', (value) => {
                if(!value) return false;
                return value && ['application/pdf'].includes(value.type);
            })
            .test('fileSize', 'FIle size must be less than 5MB', (value) => {
                return value && value.size <= 5000000;
            })
    });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setCvFile(files[0]);
            console.log("File selected From handle Input Change:", files[0]);
            // dispatch(updateField({ name, value: files[0] }))
        } else {
            dispatch(updateField({ name, value }));
        }
    };

    const formik = useFormik({
        initialValues: {
            apply_email: '',
            apply_name: '',
            apply_dob: '',
            apply_m_status: '',
            apply_gender: '',
            apply_cellno: '',
            apply_p_address: '',
            apply_c_address: '',
            apply_cnic: '',
            apply_resp: '',
            apply_study_status: '',
            apply_degree: '',
            apply_institute: '',
            apply_experience: '',
            apply_exp_salary: '',
            // hearing_source: '',
            cv_pdf: null
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const formData = new FormData();

            // Append all form values to FormData
            Object.keys(values).forEach(key => {
                if (key === 'cv_pdf') {
                    formData.append(key, values[key]);
                } else {
                    formData.append(key, values[key]);
                }
            });

            await dispatch(submitCareerForm(formData));
            dispatch(clearForm());
            resetForm();
        }
    })

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // Convert form data to FormData to handle file uploads
    //     const formDataToSend = new FormData();
    //     Object.keys(formData).forEach((key) => {
    //         formDataToSend.append(key, formData[key])
    //     });

    //     // Append the cv file from local state to the formData
    //     if (cvFile && cvFile instanceof File) {
    //         formDataToSend.append('cv_pdf', cvFile, cvFile.name);
    //         console.log("File attached to FormData From if Condition :", cvFile.name);
    //     } else {
    //         console.error('No CV file attached...')
    //     }

    //       // Log each entry in formDataToSend to confirm cv_pdf is included
    //       for (let [key, value] of formDataToSend.entries()) {
    //         if (value instanceof File) {
    //             console.log(`${key}: ${value.name}, Size: ${value.size}, Type: ${value.type}`);
    //         } else {
    //             console.log(`${key}: ${value}`);
    //         }
    //     }

    //     dispatch(submitCareerForm(formDataToSend));
    //     dispatch(clearForm());
    //     setCvFile(null);
    // };
    return (
        <>
            <div className="products-header-wrapper">
                <img src={CareerImg} alt="Career" draggable={false} />
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
                                <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                                    <h4 style={{ textAlign: 'left', fontSize: '16px', marginTop: '20px' }}>Account Information</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Email:</label>
                                                <input
                                                    type="email"
                                                    className={`form-control ${formik.touched.apply_email && formik.errors.apply_email ? 'is-invalid' : ''}`}
                                                    placeholder="email@email.com"
                                                    name="apply_email"
                                                    value={formData.apply_email}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_email') }
                                                />
                                                {formik.touched.apply_email && formik.errors.apply_email && (
                                                    <div className="invalid-feedback">{formik.errors.apply_email}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Name:</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${formik.touched.apply_name && formik.errors.apply_name ? 'is-invalid' : ''}`}
                                                    placeholder="John Brian"
                                                    name="apply_name"
                                                    value={formData.apply_name}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_name') }
                                                />
                                                {
                                                    formik.touched.apply_name && formik.errors.apply_name && (
                                                        <div className="invalid-feedback">{ formik.errors.apply_name }</div>
                                                    )
                                                }
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
                                                    className={`form-control ${formik.touched.apply_dob && formik.errors.apply_dob ? 'is-invalid' : ''}`}
                                                    name="apply_dob"
                                                    value={formData.apply_dob}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_dob') }
                                                />
                                                {
                                                    formik.touched.apply_dob && formik.errors.apply_dob && (
                                                        <div className="invalid-feedback">{formik.errors.apply_dob}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Marital Status:</label>
                                                <select
                                                    className={`form-select ${formik.touched.apply_m_status && formik.errors.apply_m_status ? 'is-invalid' : ''}`}
                                                    name="apply_m_status"
                                                    value={formData.apply_m_status}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_m_status') }
                                                >
                                                    <option value="" disabled>Select Marital Status:</option>
                                                    <option value="Single">Single</option>
                                                    <option value="Married">Married</option>
                                                    <option value="Widowed">Widowed</option>
                                                    <option value="Divorced">Divorced</option>
                                                    <option value="Separated">Separated</option>
                                                </select>
                                                {
                                                    formik.touched.apply_m_status && formik.errors.apply_m_status && (
                                                        <div className="invalid-feedback">{formik.errors.apply_m_status}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Gender:</label>
                                                <select
                                                    className={`form-select ${formik.touched.apply_gender && formik.errors.apply_gender ? 'is-invalid' : ''}`}
                                                    name="apply_gender"
                                                    value={formData.apply_gender}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_gender') }
                                                >
                                                    <option value="" disabled>Select Gender:</option>
                                                    <option value="M">Male</option>
                                                    <option value="F">Female</option>
                                                </select>
                                                {
                                                    formik.touched.apply_gender && formik.errors.apply_gender && (
                                                        <div className="invalid-feedback">{formik.errors.apply_gender}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Phone#:</label>
                                                <input
                                                    type="tel"
                                                    className={`form-control ${formik.touched.apply_cellno && formik.errors.apply_cellno ? 'is-invalid' : ''}`}
                                                    placeholder="03010000000"
                                                    name="apply_cellno"
                                                    value={formData.apply_cellno}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_cellno') }
                                                />
                                                {
                                                    formik.touched.apply_cellno && formik.errors.apply_cellno && (
                                                        <div className="invalid-feedback">{formik.errors.apply_cellno}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Permanent Address:</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${formik.touched.apply_p_address && formik.errors.apply_p_address ? 'is-invalid' : ''}`}
                                                    placeholder="1446 Beatty Ave, Cambrige OH 43725"
                                                    name="apply_p_address"
                                                    value={formData.apply_p_address}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_p_address') }
                                                />
                                                {
                                                    formik.touched.apply_p_address && formik.errors.apply_p_address && (
                                                        <div className="invalid-feedback">{formik.errors.apply_p_address}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Current Address:</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${formik.touched.apply_c_address && formik.errors.apply_c_address ? 'is-invalid' : ''}`}
                                                    placeholder="1446 Beatty Ave, Cambrige OH 43725"
                                                    name="apply_c_address"
                                                    value={formData.apply_c_address}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_c_address') }
                                                />
                                                {
                                                    formik.touched.apply_c_address && formik.errors.apply_c_address && (
                                                        <div className="invalid-feedback">{formik.errors.apply_c_address}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>CNIC:</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${formik.touched.apply_cnic && formik.errors.apply_cnic ? 'is-invalid' : ''}`}
                                                    placeholder="00000-0000000-0"
                                                    name="apply_cnic"
                                                    value={formData.apply_cnic}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_cnic') }
                                                />
                                                {
                                                    formik.touched.apply_cnic && formik.errors.apply_cnic && (
                                                        <div className="invalid-feedback">{formik.errors.apply_cnic}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Job Type:</label>
                                                <select
                                                    className={`form-select ${formik.touched.apply_resp && formik.errors.apply_resp ? 'is-invalid' : ''}`}
                                                    name="apply_resp"
                                                    value={formData.apply_resp}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_resp') }
                                                >
                                                    <option value="" disabled>Select Job Type:</option>
                                                    <option value="Frontend Developer">Frontend Developer</option>
                                                    <option value=".Net Developer">.Net Developer</option>
                                                    <option value="Laravel Developer">Laravel Developer</option>
                                                    <option value="Quality Assurance">Quality Assurance</option>
                                                </select>
                                                {
                                                    formik.touched.apply_resp && formik.errors.apply_resp && (
                                                        <div className="invalid-feedback">{formik.errors.apply_resp}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <h4 style={{ textAlign: 'left', fontSize: '16px' }}>Academic Information</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Currently Studying:</label>
                                                <select
                                                    className={`form-select ${formik.touched.apply_study_status && formik.errors.apply_study_status ? 'is-invalid': ''}`}
                                                    name="apply_study_status"
                                                    value={formData.apply_study_status}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_study_status') }
                                                >
                                                    <option value="" disabled>Select Degree Status:</option>
                                                    <option value="No">No</option>
                                                    <option value="Yes">Yes</option>
                                                </select>
                                                {
                                                    formik.touched.apply_study_status && formik.errors.apply_study_status && (
                                                        <div className="invalid-feedback">{formik.errors.apply_study_status}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Degree:</label>
                                                <select
                                                    className={`form-select ${formik.touched.apply_degree && formik.errors.apply_degree ? 'is-invalid' : ''}`}
                                                    name="apply_degree"
                                                    value={formData.apply_degree}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_degree') }
                                                >
                                                    <option value="" disabled>Select Degree:</option>
                                                    <option value="Non-Matriculation">Non-Matriculation</option>
                                                    <option value="Matriculation/O-Level">Matriculation/O-Level</option>
                                                    <option value="Intermediate/A-Level">Intermediate/A-Level</option>
                                                    <option value="Bachelor&apos;s Degree">Bachelor&apos;s Degree</option>
                                                    <option value="Master&apos;s Degree">Master&apos;s Degree</option>
                                                    <option value="Doctorate">Doctorate</option>
                                                    <option value="Certificate">Certificate</option>
                                                    <option value="Diploma">Diploma</option>
                                                </select>
                                                {
                                                    formik.touched.apply_degree && formik.errors.apply_degree && (
                                                        <div className="invalid-feedback">{formik.errors.apply_degree}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Institution:</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${formik.touched.apply_institute && formik.errors.apply_institute ? 'is-invalid' : ''}`}
                                                    placeholder="Institute"
                                                    name="apply_institute"
                                                    value={formData.apply_institute}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_institute') }
                                                />
                                                {
                                                    formik.touched.apply_institute && formik.errors.apply_institute && (
                                                        <div className="invalid-feedback">{formik.errors.apply_institute}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <h4 style={{ textAlign: 'left', fontSize: '16px' }}>Work Experience</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Work Experience:</label>
                                                <textarea
                                                    className={`form-control ${formik.touched.apply_experience && formik.errors.apply_experience ? 'is-invalid' : ''}`}
                                                    rows="3"
                                                    name="apply_experience"
                                                    value={formData.apply_experience}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_experience') }
                                                />
                                                {
                                                    formik.touched.apply_experience && formik.errors.apply_experience && (
                                                        <div className="invalid-feedback">{formik.errors.apply_experience}</div>
                                                    )
                                                }
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
                                                    className={`form-control ${formik.touched.apply_exp_salary && formik.errors.apply_exp_salary ? 'is-invalid' : ''}`}
                                                    name="apply_exp_salary"
                                                    value={formData.apply_exp_salary}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_exp_salary') }
                                                />
                                                {
                                                    formik.touched.apply_exp_salary && formik.errors.apply_exp_salary && (
                                                        <div className="invalid-feedback">{formik.errors.apply_exp_salary}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>How did you hear about us?:</label>
                                                <select
                                                    className={`form-select ${formik.touched.apply_resp && formik.errors.apply_resp ? 'is-invalid' : ''}`}
                                                    name="apply_resp"
                                                    value={formData.apply_resp}
                                                    onChange={handleInputChange}
                                                    { ...formik.getFieldProps('apply_resp') }
                                                >
                                                    <option value="" disabled>Select company hearing status:</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Word of Mouth">Word of Mouth</option>
                                                    <option value="Referral">Referral</option>
                                                    <option value="Job Fair">Job Fair</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                {
                                                    formik.touched.apply_resp && formik.errors.apply_resp && (
                                                        <div className="invalid-feedback">{formik.errors.apply_resp}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label required" style={{ fontSize: '14px' }}>Upload CV:</label>
                                                <input
                                                    type="file"
                                                    className={`form-control-file ${formik.touched.cv_pdf && formik.errors.cv_pdf ? 'is-invalid' : ''}`}
                                                    name="cv_pdf"
                                                    onChange={(event) => {
                                                        formik.setFieldValue('cv_pdf', event.target.files[0]);
                                                    }}
                                                />
                                                {
                                                    formik.touched.cv_pdf && formik.errors.cv_pdf && (
                                                        <div className="invalid-feedback">{formik.errors.cv_pdf}</div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="submit" className="btn form-sub" disabled={loading || !formik.isValid || !formik.dirty}>
                                            {
                                                loading ? 'Submitting...' : 'Submit'
                                            }
                                        </button>
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