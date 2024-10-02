import React from 'react';
import '../../assets/css/MobAppDev.css';
import MobAppImg from '../../assets/images/mobile-app-2-01.jpg';
import MobAppImg1 from '../../assets/images/Mobile-App1.jpg';
import AppDevImg from '../../assets/icons/App-development.jpg';
import UIUX_Icon from '../../assets/icons/smart-UIUX.jpg';
import APiIcon from '../../assets/icons/API.jpg';
import MObAppImg2 from '../../assets/images/mobile app image 2.jpg';

const MobAppDev = () => {
    return (
        <>
            <div className="products-header-wrapper">
                <img src={MobAppImg} title="mobile-app" />
                <div className="P-header-text text-content" style={{width: '100%', margin: '20px'}}>
                    <h6 className='my-2' style={{color: '#ffbf34', fontWeight: 'bold'}}>Expand your business potential</h6>
                    <h4>Create the perfect mobile app according to your needs!</h4>
                </div>
            </div>

            {/* Banner Ends Here */}
            <div className="erp pt-5">
                <div className="container">
                    <div className="row" style={{ marginBottom: '25px' }}>
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Need a <em>Mobile App</em> that fits your product or service best?</h2>
                                <span>
                                    Whether your app is consumer-oriented or an enterprise solution, we offer solutions from the ideation to full execution of your application.
                                </span>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="service-item">
                                <img src={MobAppImg1} alt="Mobile-App" title="Mobile-App" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="service-item flexsys row">
                                    <div className="col-lg-2 col-md-3 matters-icon app-icon mob">
                                        <img src={AppDevImg} alt="App-development" title="App-development" />
                                    </div>
                                    <div className="col-lg-10 col-md-9 matters-desc">
                                        <div className="down-content-sub">
                                            <h6>iOS, Android, Html5 App Development</h6>
                                            <p>Develop a mobile website based on HTML5 or to use cross-platform development. Developing a platform-specific app or a generic HTML 5 solution differs per case.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-item flexsys row m-0">
                                    <div className="col-lg-2 col-md-3 matters-icon app-icon">
                                        <img src={UIUX_Icon} alt="smart-UIUX" title="smart-UIUX" />
                                    </div>
                                    <div className="col-lg-10 col-md-9 matters-desc">
                                        <div className="down-content-sub">
                                            <h6>Smart UI/UX</h6>
                                            <p>The basis for all app development is a healthy balance between technology and design. We offer solutions that add value for your product/service.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-item flexsys row m-0">
                                    <div className="col-lg-2 col-md-3 matters-icon app-icon">
                                        <img src={APiIcon} alt="API" title="API" />
                                    </div>
                                    <div className="col-lg-10 col-md-9 matters-desc">
                                        <div className="down-content-sub">
                                            <h6>Smart APIs</h6>
                                            <p>Due to the rapid development of the mobile market, a good link between external systems or your existing applications with a mobile app is especially important. Reach out to us for the finest app creation services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="erp pt-5" style={{ background: 'rgba(218, 218, 218, 0.432)' }}>
                    <div className="container" style={{ marginBottom: '20px' }}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>Why Trust <em>Prismatic</em>?</h2>
                                    <span>At PTL, we offer cutting-edge solutions to bring your product to every device and platform. The tools and technologies we offer are:</span>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="service-item">
                                    <img src={MObAppImg2} alt="mobile-app" title="mobile-app" />
                                </div>
                            </div>

                            <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="down-content-sub service-item mobile-app">
                                    <h6>React Native & Flutter as Front End</h6>
                                    <h6>Node JS Back End</h6>
                                    <h6>Laravel Back End</h6>
                                    <h6>MySQL Database</h6>
                                    <h6>Apache Server</h6>
                                    <p>Create your successful mobile application today! We also cater to tailor-made mobile app development software requests based on your specific requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="erp-detail erp pt-3">
                <div className="container" style={{ marginBottom: '10px' }}>
                    <div className="row mb-4">
                        <div className="col-md-12 make-unique">
                            <h5 className="title-heading text-center">
                                "Bringing Your Ideas to Life: The Power of Custom Mobile App Development"
                            </h5>
                            <p className="mb-3">
                                In today's digital world, mobile apps have become an integral part of our daily lives. From managing our
                                finances to staying connected with friends and family, there's an app for just about everything. However,
                                not all apps are created equal. To truly stand out and meet the needs of your users, it's crucial to have
                                a custom app that's tailored to your specific requirements.
                            </p>
                            <p>
                                That's where Prismatic Technologies comes in - a software house specializing in mobile app development
                                services in Pakistan. With a team of experts who understand the latest technologies and design trends,
                                Prismatic Technologies is geared to help you turn your ideas into reality. In this article, we'll explore
                                the many benefits of custom mobile app development and why it's essential for businesses looking to
                                succeed today.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 make-unique">
                            <h2 className="title-heading">Know More About Us</h2>
                            <p>
                                At Prismatic Technologies, we specialize in creating custom mobile app development in Pakistan as
                                solutions that cater to your unique requirements. Based in Lahore, our team of software specialists are
                                dedicated to providing innovative and tailored solutions that meet the specific needs of our clients. With
                                a focus on innovation, user experience and a strong commitment to understanding each client's goals and
                                objectives, we have built a reputation for delivering cutting-edge software solutions that drive real
                                results. Whether serving the public or private sector, our solutions stand out in a crowded marketplace,
                                providing the best software solutions available, backed by a team of dedicated specialists.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 make-unique">
                            <h2 className="title-heading">
                                Why Should You Get Our Mobile App Development Services in Pakistan?
                            </h2>
                            <p className="pt-2 pb-2">
                                You don’t need us to tell you that mobile apps have become an essential tool for businesses looking to
                                reach their customers and drive real results—be it a bank, a grocery store or even a restaurant. At
                                Prismatic Technologies, we specialize in providing the best mobile app development in the market.
                            </p>
                            <p className="pt-2 pb-2">
                                Our team of experts is dedicated to delivering innovative solutions that meet the unique needs of our
                                clients. We provide a full range of mobile app development services, including iOS, Android, HTML5 app
                                development, smart UI/UX, and smart APIs. Our focus on user experience and innovation sets us apart from
                                our competition, and we work closely with each client to understand their specific requirements and create
                                custom solutions that deliver on their goals and objectives.
                            </p>
                            <p className="pt-2 pb-2">
                                With Prismatic Technologies, you can be assured that you are getting the best mobile app development in
                                Pakistan available. We are dedicated to delivering innovative solutions that drive real results, and our
                                commitment to understanding each client's unique needs sets us apart in a crowded marketplace.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-3 mb-3">
                        <div className="col-md-12">
                            <h2 className="title-heading">What Other Services Do We Provide?</h2>
                            <p>ERP Solutions</p>
                            <ul style={{ listStyle: 'disc' }} className="mb-2 list-resp">
                                <li>CRM Services for Real Estate</li>
                                <li>Cutting-Edge Learning Management System</li>
                                <li>Custom Mobile App Development services in Pakistan</li>
                                <li>Powerful E-Commerce Platforms</li>
                                <li>Streamlined POS Systems for Retail Operations.</li>
                            </ul>
                            <p>
                                So, whether you’re in the market for ERP consulting services or to get your organization rolling with
                                eLearning, we’ve got it all for you. You just have to bring your vision and commitment to us and we’ll
                                handle the rest.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobAppDev;