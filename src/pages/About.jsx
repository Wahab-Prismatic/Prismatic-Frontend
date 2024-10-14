import React, { useEffect } from 'react';
import '../assets/css/About.css';
import AboutCOverImg from '../assets/images/About-cover-new1.webp';
// import SpinCircleImg from '../assets/images/spin-circle.png';
import AboutLeftImg from '../assets/images/about-left.webp';
import GoalImg from '../assets/images/goal.webp';
import ValueImg from '../assets/images/value-new.webp';
import SupportImg from '../assets/images/support-new.webp';
import TeamImg from '../assets/images/Team-new.webp';
import OurClientsSection from '../components/OurClientsSection';
import  {teamData}  from '../services';
import Aos from 'aos';
import { Link } from 'react-router-dom';


const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div className="about-us-wrapper">
                <img className="img-fluid" src={AboutCOverImg} draggable={false} alt="About-cover" title="About-cover" />
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>Lean, Agile, Data-driven</p>
                </div>
            </div>
            <div className="more-info about-info">
                {/* <img src={SpinCircleImg} alt="spin-circle" title="spin-circle" /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mb-5 left">
                            <img
                                className="img-fluid"
                                src={AboutLeftImg}
                                draggable={false}
                                alt="about-us"
                                title="about-us"
                            />
                            <div className="about-me" data-aos="fade-up">
                                <p>
                                    𝘛𝘰 𝘨𝘦𝘵 𝘴𝘰𝘮𝘦𝘵𝘩𝘪𝘯𝘨 𝘯𝘦𝘸 𝘥𝘰𝘯𝘦, 𝘺𝘰𝘶 𝘩𝘢𝘷𝘦 𝘵𝘰 𝘣𝘦 𝘴𝘵𝘶𝘣𝘣𝘰𝘳𝘯 𝘢𝘯𝘥 𝘧𝘰𝘤𝘶𝘴𝘦𝘥, 𝘵𝘰 𝘵𝘩𝘦 𝘱𝘰𝘪𝘯𝘵 𝘵𝘩𝘢𝘵 𝘰𝘵𝘩𝘦𝘳𝘴 𝘮𝘪𝘨𝘩𝘵 𝘧𝘪𝘯𝘥 𝘶𝘯𝘳𝘦𝘢𝘴𝘰𝘯𝘢𝘣𝘭𝘦.
                                </p>
                                <br />
                                <p className="author">𝐉𝐄𝐅𝐅 𝐁𝐄𝐙𝐎𝐙</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mb-5 content">
                            <h5 data-aos="fade-left">ABOUT US</h5>
                            <h2>Get to know about our company</h2>

                            <div className="wrapper">
                                <div className="p1">
                                    <p>
                                        Our team specializes in the development of detailed software systems designed for public
                                        and private sectors. We offer the best services to ensure high value to our clients that
                                        facilitate their business.
                                    </p>
                                    <p>
                                        Our products are state-of-the-art and tailor-made for the specific requirements of our
                                        clients. With innovation, efficiency, and integrity as the key values of our company, we
                                        aim to grow bigger and better.
                                    </p>
                                </div>
                            </div>

                            <Link to="/contact-us" className="p-read-more btn1">
                                <button className="contact-us-bt" style={{ marginTop: '36px' }}>Contact us</button>
                            </Link>

                            <div className="terms mt-5">
                                <p><span style={{ color: 'green' }}>&#10004;</span> Innovation</p>
                                <p><span style={{ color: 'green' }}>&#10004;</span> Efficiency</p>
                                <p><span style={{ color: 'green' }}>&#10004;</span> Integrity</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row adjust equal">
                        {/* Goals Section */}
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="resources">
                                <div className="color"></div>
                                <img className="icon-target" src={GoalImg} draggable={false} alt="goal" title="goal" />
                                <h3>Goals</h3>
                                <p>
                                    We at Prismatic aim to deliver top quality tech products to our clients. We work hard
                                    every day to perfect our product that helps our clients become more and more efficient.
                                </p>
                            </div>
                        </div>

                        {/* Values Section */}
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="resources">
                                <div className="color"></div>
                                <img className="icon-target" src={ValueImg} draggable={false} alt="value-new" title="value-new" />
                                <h3>Values</h3>
                                <p>
                                    We swear by delivering quality while also keeping in mind that time is of the essence.
                                    We work hard to deliver innovation to our clients in the least amount of time.
                                </p>
                            </div>
                        </div>

                        {/* Support Section */}
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="resources">
                                <div className="color"></div>
                                <img className="icon-target" src={SupportImg} draggable={false} alt="support-new" title="support-new" />
                                <h3>Support</h3>
                                <p>
                                    Our team is constantly striving to deliver the best experience to customers.
                                    We at Prismatic are always present to help our customers out whenever and wherever required.
                                </p>
                            </div>
                        </div>

                        {/* Team Section */}
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="resources">
                                <div className="color"></div>
                                <img className="icon-target" src={TeamImg} draggable={false} alt="Team-new" title="Team-new" />
                                <h3>Team</h3>
                                <p>
                                    We optimize our teams to effectively manage all projects without hampering the pace of work. We have a lean,
                                    agile team that is responsive and always up-to-date with any shortcomings to resolve them as soon as possible.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
                {/* Our Clients Section Start */}
                <OurClientsSection />
                {/* Our Clients Section End */}

                {/* Our Team Section Start */}
                <section id="team" className="team section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Our Team Members</h2>
                            <p></p>
                        </div>
                        <div className="row team-cl">
                            {teamData.map((member, index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-card">
                                    <div className="middle">
                                        <div className="front">
                                            <div className="member">
                                                <div className="row team-1">
                                                    <div className="col-md-5 col-sm-5">
                                                        <div className="pic">
                                                            <img
                                                                className="img-fluid"
                                                                src={member.imgSrc}
                                                                alt={member.name}
                                                                title={member.name}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="content col-md-7 col-sm-7">
                                                        <h3>{member.name}</h3>
                                                        <span className="founder"></span>
                                                        <p>{member.position}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="back-content">
                                                <h3>{member.position}</h3>
                                                <p>{member.description}</p>
                                                <div className="social">
                                                    <a href={member.linkedInLink} className="linkdin">
                                                        <i className="fa fa-linkedin-square"></i>
                                                    </a>
                                                    <a href={member.linkedInLink} className="link-name">
                                                        {member.linkedInName}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Our Team Section Start */}
            </div>
        </>
    )
}

export default About