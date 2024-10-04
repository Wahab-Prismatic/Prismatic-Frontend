import '../../assets/css/LMS.css';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/images/images/hero-img.webp';
import LMSClients from '../../components/LMSClients';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialVideo from '../../assets/video/testimonial-video.mp4';
import PlayBtn from '../../assets/images/images/video-ply-btn.webp';
import AleemLogo from '../../assets/images/images/al-aleem-logo.webp';
import { useRef, useState } from 'react';

const LMS = () => {
    const [isPlaying, setIsPlaying] = useState(false); // State to track whether the video is playing
    const videoRef = useRef(null); // create a reference for the video element

    const handlePlayPause = () => {
        if(isPlaying) {
            videoRef.current.pause(); // pause the video
        } else {
            videoRef.current.play(); // play the video
        }

        setIsPlaying(!isPlaying); // For toggle the state
    }
    
    return (
        <>
            {/* <!-- LMS Hero Section --> */}
            <div className="lms-hero" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 mt-lg-5">
                            <div className="d-flex justify-content-center flex-wrap flex-column h-100 custom-margin-lg">
                                <h1 className="mt-4">The <span className="lms-h-clr">best LMS</span> for personalized learning</h1>
                                <p className="mb-lg-4">Create engaging eLearning experiences with our customizable learning management system.
                                </p>
                                <Link to="/contact-us" className="btn lms-register mb-lg-5">Book a demo</Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 ">
                            <img src={HeroImg} alt="LMS-img" className="img-fluid" loading="lazy" draggable={false} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- LMS Hero Section end--> */}
            <LMSClients />

            <div className="lms-features section" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-center mb-lg-5 lms-h">
                                <span className="lms-h-clr">Key features</span>
                                <br /> of prismatic-LMS
                            </h2>
                        </div>
                    </div>

                    {/* Swiper Section */}
                    {/* <Swiper
                        className="mySwiper"
                        modules={[Mousewheel, Pagination, Autoplay]}
                        // autoplay={{ delay: 3000, disableOnInteraction: false }}
                        // loop={true}
                        mousewheel={true}
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        direction={'vertical'}
                    >
                        <SwiperSlide>
                            <div className="row g-4">
                                <div className="col-lg-7 mt-lg-4">
                                    <div className="adm-portal">
                                        <h3>Admissions Portal</h3>
                                        <p>
                                            Streamline your admissions process with our comprehensive admissions portal.
                                            Set up systems and criteria for each course, ensuring a smooth and efficient
                                            enrollment process. Manage applications, track prospective student data, and
                                            make informed decisions with ease.
                                        </p>
                                        <img
                                            src={AdmissionPortalImg}
                                            alt="admission-portal-img"
                                            className="img-fluid admin-portal-img"
                                            loading="lazy"
                                        />
                                        <img
                                            src={AdmissionPortalImg2}
                                            alt="admission-portal-img-2"
                                            className="img-fluid adm-img-2"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5 mt-lg-4">
                                    <div className="adm-portal">
                                        <h3>Admin Dashboard</h3>
                                        <p>
                                            Oversee the entire learning ecosystem with the Admin Dashboard. Manage faculty,
                                            students, courses, and more with an intuitive interface that provides real-time
                                            insights and control over every administrative aspect of your institution.
                                        </p>
                                        <img
                                            src={AdminDashboardImg}
                                            alt="admin-dashboard"
                                            className="img-fluid"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="row g-4">
                                <div className="col-lg-5 mt-lg-4">
                                    <div className="adm-portal">
                                        <h3>Faculty Portal</h3>
                                        <p>
                                            Empower your faculty with a dedicated portal to manage their academic
                                            responsibilities. From adding assignments and scheduling lectures to tracking
                                            student progress and providing feedback, the faculty portal ensures that
                                            teachers have all the tools they need to deliver a top-notch educational
                                            experience.
                                        </p>
                                        <img
                                            src={FacultyPortalImg}
                                            alt="Faculty-Portal"
                                            className="img-fluid"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-7 mt-lg-4">
                                    <div className="adm-portal">
                                        <h3>Fee Management</h3>
                                        <p>
                                            Keep track of all financial transactions related to student fees with the Fee
                                            Management module. Automatically generate fee structures, track payments, and
                                            manage scholarships or discounts with ease, ensuring accurate and transparent
                                            financial operations.
                                        </p>
                                        <img
                                            src={FeeManagementImg}
                                            alt="fee-management-img"
                                            className="img-fluid"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row g-4">
                                <div className="col-lg-7 mt-lg-4">
                                    <div className="adm-portal ">
                                        <h3>Examination Management</h3>
                                        <p>Handle all aspects of examinations with the Examination Management module.
                                            Schedule exams, generate seating plans, upload results, and manage
                                            exam-related notifications
                                        </p>
                                        <img 
                                            src={ExamManageImg}
                                            alt="examination-management" 
                                            className="img-fluid" 
                                            loading="lazy" 
                                        />
                                        <img 
                                            src={CoursesImg}
                                            alt="admission-portal-img-2" 
                                            className="img-fluid adm-img-2" 
                                            loading="lazy" 
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5 mt-lg-4">
                                    <div className="adm-portal">
                                        <h3>Attendance Management</h3>
                                        <p>Automate attendance tracking with the Attendance Management feature. Faculty
                                            can easily mark
                                            attendance,
                                            and the system generates comprehensive attendance reports
                                        </p>
                                        <img 
                                            src={AttendanceReportImg} 
                                            alt="Faculty-Portal" 
                                            className="img-fluid" 
                                            loading="lazy" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper> */}
                </div>
            </div>
            {/* <div className="row text-center">
                <div className="col-lg-12 mt-4">
                    <a href="/contact-us" className="btn lms-register mb-setting mx-auto">
                        Book a demo
                    </a>
                </div>
            </div> */}

            {/* <!-- feature section end --> */}
            <div className="learn-mg section next-section" id="benefits">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex flex-column text-center">
                                <h1><span className="lms-h-clr">All-in-One</span> Learning Management System</h1>
                                <p className="mt-lg-4">Prismatic-LMS has everything you need to train your teams, measure results, and develop
                                    the skills people need to pursue opportunities.
                                    Provide intuitive user experiences that amplify learning and development for everyone.
                                </p>
                                <div className="hexa-wrap">
                                    <div className="hexagon purple">
                                        <a href="#" className="inner-data">
                                            <h2>LMS<br /> Integration</h2>
                                        </a>
                                    </div>
                                    <div className="hexagon light-purple">
                                        <a href="#" className="inner-data">
                                            <h2>Data<br />Tracking</h2>
                                        </a>
                                    </div>
                                    <div className="hexagon pink">
                                        <a href="#" className="inner-data">
                                            <h2>Course<br />Creation</h2>
                                        </a>
                                    </div>
                                    <div className="hexagon sea-green">
                                        <a href="#" className="inner-data">
                                            <h2>Video<br /> Conferencing</h2>
                                        </a>
                                    </div>
                                    <div className="hexagon light-sea-green">
                                        <a href="#" className="inner-data">
                                            <h2>Gamification</h2>
                                        </a>
                                    </div>
                                    <div className="hexagon light-sea-green">
                                        <a href="#" className="inner-data">
                                            <h2>Centralized<br /> Learning</h2>
                                        </a>
                                    </div>
                                    <div className="hexagon sea-green">
                                        <a href="#" className="inner-data">
                                            <h2>Reporting <br /> Analytics</h2>
                                        </a>
                                    </div>
                                    <div className="hexagon light-purple">
                                        <a href="#" className="inner-data">
                                            <h2>Mobile <br /> Learning</h2>
                                        </a>
                                    </div>
                                    <div className="hexagon pink">
                                        <a href="#" className="inner-data">
                                            <h2>Performance<br /> Management</h2>
                                        </a>
                                    </div>
                                </div>
                                <a href="/contact-us" className="btn lms-register  lms-explore-btn">Book a demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- learning-management end--> */}
            {/* <!-- testimonials start --> */}
            <div className="testimonial-sec section" id="clients">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="lms-h text-center mb-lg-5">what our Happy <span className="lms-h-clr">client says</span></h1>
                        </div>
                        <div className="col-lg-5">
                            <div className="testimonial-vid about-us-video position-relative">
                                <video 
                                    id="aboutVideo" 
                                    src={TestimonialVideo} 
                                    playsInline
                                    ref={videoRef}
                                    onClick={handlePlayPause}
                                    ></video>
                               {
                                !isPlaying && (
                                    <div className="play-icon-about" id="playIcon" onClick={handlePlayPause}>
                                    <img 
                                        src={PlayBtn} 
                                        loading="lazy" 
                                        alt="video-play-button" 
                                        className="test-vid-btn" 
                                    />
                                </div>
                                )
                               }
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="testimonial-data d-flex flex-column h-100 justify-content-center">
                                <img src={AleemLogo} loading="lazy" alt="al-aleem-logo" className="img-fluid" />
                                    <h5>Al Aleem Medical College</h5>
                                    <p>
                                        Al-Aleem Medical College Shall produce highly professional and committed doctors by focusing on Student
                                        centered quality education using
                                        advance teaching strategies supported by innovative research to meet the highest standards of patient and
                                        community healthcare.To evolve as
                                        a leading medical college that advances global models of standardized education,
                                        innovative research and community health care.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- testimonials end --> */}
        </>
    )
}

export default LMS;