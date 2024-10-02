import { useEffect } from 'react';
import EComImg from '../../assets/images/E-Commerce-image.png';
import LaptopImg from '../../assets/images/Ecommerce imaage 1.jpg'
import StrategicIcon from '../../assets/icons/Strategize-Effectively.png';
import BestPriceIcon from '../../assets/icons/Best-Price.png';
import ConsumerIcon from '../../assets/icons/Consumer-friendly .png';
import shopifyImg from '../../assets/images/our_stack/shopify.jpg';
import DotNetImg from '../../assets/images/our_stack/DotNet.jpg';
import WordpressImg from '../../assets/images/our_stack/WordPress.jpg';
import BigCommImg from '../../assets/images/our_stack/Bigcommerce.jpg';
import LaravelImg from '../../assets/images/our_stack/larvel.png';
import ECommerce2ndImg from '../../assets/images/E-Commerce2th-image.jpg';
import HearYouIcon from '../../assets/icons/we-hear-you.png';
import BrainstormingIcon from '../../assets/icons/Brainstorming.png';
import TestIcon from '../../assets/icons/Test.png';
import PerfectExecutionIcon from '../../assets/icons/Perfect-Execution.png';
import ReviewOfBusinessIcon from '../../assets/images/Review-of-Business.png';
import VisualisationDependingIcon from '../../assets/images/Visualisation-Depending.png';
import ContentStrategyIcon from '../../assets/images/Devising-Content-Strategy.png';
import FullCustomizationIcon from '../../assets/images/Full-Customization.png';
import NoTimeLagsIcon from '../../assets/images/No-Time-Lags.png';
import ManageItForYouIcon from '../../assets/images/Manage-It-For-You.png';
import { A11y, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../assets/css/E_Commerce.css';
// Import Swiper CSS modules
import 'swiper/css';
import '../../assets/css/E_Commerce.css';

const E_Commerce = () => {
    const technologies = [
        { src: shopifyImg, title: "Shopify", alt: "Shopify" },
        { src: DotNetImg, title: ".Net", alt: ".Net" },
        { src: WordpressImg, title: "WordPress", alt: "WordPress" },
        { src: BigCommImg, title: "Bigcommerce", alt: "Bigcommerce" },
        { src: LaravelImg, title: "Laravel", alt: "Laravel" }
    ];
    return (
        <>
            <div className="products-header-wrapper">
                <img src={EComImg} alt="e-commerce" title="e-commerce" />
                <div className="P-header-text text-content">
                    <h6 className='my-2' style={{color: '#ffbf34', fontWeight: 'bold'}}>Bring Your Vision To Life</h6>
                    <h4 style={{ fontSize: '22px' }}>
                        Websites are the core of businesses today. Improve your customer’s experience and expand your business with Prismatic’s e-commerce solutions.
                    </h4>
                </div>
            </div>
            {/* Banner Ends Here */}

            <div className="erp pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>
                                    We Address Your <em>Needs</em>
                                </h2>
                                <span style={{ fontSize: '12px' }}>
                                    Prismatic’s E-Commerce Integration Solutions help you adapt to consumer’s demands in time. To strategize the efficiency and productivity of your business, integrate your online business with e-commerce solutions.
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <img src={LaptopImg} alt="Ecommerce" title="Ecommerce" />
                                <div className="down-content"></div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2">
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon">
                                    <img src={StrategicIcon} alt="Fast-Market-Time" title="Fast-Market-Time" />
                                </div>
                                <div className="col-md-10">
                                    <div className="down-content-sub">
                                        <h6>Strategize Effectively</h6>
                                        <p style={{ fontSize: '11px' }}>
                                            Our all-in-one e-commerce solution provides you innovative selling strategies and the best solutions to develop your business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon">
                                    <img src={BestPriceIcon} alt="Low-cost" title="Low-cost" />
                                </div>
                                <div className="col-md-10">
                                    <div className="down-content-sub">
                                        <h6>We Give The Best Price</h6>
                                        <p style={{ fontSize: '11px' }}>
                                            You can start your online business with the help of our affordable ecommerce services and start earning.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon">
                                    <img src={ConsumerIcon} alt="Online-Shopping-sport" title="Online-Shopping-sport" />
                                </div>
                                <div className="col-md-10">
                                    <div className="down-content-sub">
                                        <h6>Consumer-friendly Solutions</h6>
                                        <p style={{ fontSize: '11px' }}>
                                            We provide you a platform where consumers come out of interest and are prompted to shop.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="partners" style={{ marginBottom: '50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Our Core <em>Development Technologies</em></h2>
                                <hr style={{ width: '80px', marginTop: '1rem', height: '1px' }} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Swiper
                                className="mySwiper"
                                modules={[Scrollbar, A11y, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={4}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                breakpoints={{
                                    1024: { slidesPerView: 4 },
                                    768: { slidesPerView: 3 },
                                    640: { slidesPerView: 2 },
                                    320: { slidesPerView: 1 }
                                }}
                            >
                                {technologies.map((tech, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="item">
                                            <a href="#">
                                                <img src={tech.src} loading="lazy" title={tech.title} alt={tech.alt} />
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <div className="erp pt-5" style={{ background: 'rgba(218, 218, 218, 0.432)' }}>
                <div className="container erp-container" style={{ marginBottom: '20px' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>How do we bring your idea to life?</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <img
                                    style={{
                                        width: '100%',
                                        borderRadius: '20px',
                                        height: '350px',
                                        objectFit: 'contain',
                                    }}
                                    src={ECommerce2ndImg}
                                    alt="erp"
                                    title="erp"
                                />
                                <div className="down-content"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon">
                                    <img src={HearYouIcon} alt="We Hear You" title="We Hear You" />
                                </div>
                                <div className="col-md-10 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>We Hear you</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            We meet customers in a set place to discuss the details about needs and demands before proposing a plan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon">
                                    <img src={BrainstormingIcon} alt="Brainstorming" title="Brainstorming" />
                                </div>
                                <div className="col-md-10 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Brainstorming</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            Our experts come up with all kinds of ideas and initiatives for delivering the best solutions for services chosen.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon">
                                    <img src={TestIcon} alt="Testing & Trying" title="Testing & Trying" />
                                </div>
                                <div className="col-md-10 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>You Can Test It Out!</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            After agreeing on the ideas and plans, we will conduct meetings as scheduled and give comments on the results & adaptations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon">
                                    <img src={PerfectExecutionIcon} alt="Perfect Execution" title="Perfect Execution" />
                                </div>
                                <div className="col-md-10 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Perfect Execution</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            Once the final plan is approved, everything will be conducted according to the agreed contract.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="erp pt-5 pb-5" style={{ background: 'rgb(2 80 248 / 12%)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>
                                    What We Offer For <em>E-Commerce</em>
                                </h2>
                                <span style={{ fontSize: '12px' }}>
                                    Do you want to sell your products or services on the internet? Do you want to capitalize on social media for your business and need help? Prismatic can help you achieve your e-commerce goals.
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon">
                                    <img src={ReviewOfBusinessIcon} alt="Review-of-Business" title="Review-of-Business" />
                                </div>
                                <div className="col-md-10">
                                    <div className="down-content-sub">
                                        <h6>Review of Business</h6>
                                        <hr style={{ width: '80px', height: '1px', float: 'left', marginTop: 'auto' }} />
                                        <br />
                                        <p style={{ fontSize: '11px', lineHeight: '15px' }}>
                                            The functionalities required for your unique website are specified and evaluated· We determine what the preferable structure for your website & content could look like. You get benefit from consultation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon">
                                    <img src={VisualisationDependingIcon} alt="Visualisation-Depending" title="Visualisation-Depending" />
                                </div>
                                <div className="col-md-10">
                                    <div className="down-content-sub">
                                        <h6>Visualisation Depending On Your Business Goals</h6>
                                        <hr style={{ width: '80px', height: '1px', float: 'left', marginTop: 'auto' }} />
                                        <br />
                                        <p style={{ fontSize: '11px', lineHeight: '15px' }}>
                                            Integration of a visual appearance chosen from a library of several thousand models. A model can also be custom designed. Fit-to-model structure to match your needs can also be provided. Integration of your logo and slogan is provided.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon">
                                    <img src={ContentStrategyIcon} alt="Devising-Content-Strategy" title="Devising-Content-Strategy" />
                                </div>
                                <div className="col-md-10">
                                    <div className="down-content-sub">
                                        <h6>Devising Content Strategy</h6>
                                        <hr style={{ width: '80px', height: '1px', float: 'left', marginTop: 'auto' }} />
                                        <br />
                                        <p style={{ fontSize: '11px', lineHeight: '15px' }}>
                                            Content plan for the website is created for a dynamic and efficient implementation. Images are embedded into your website content when being laid out.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" style={{ textAlign: 'end' }}>
                            <div className="service-item flexsys">
                                <div className="col-md-10 ecommerce-order">
                                    <div className="down-content-sub">
                                        <h6>Full Customization</h6>
                                        <hr style={{ width: '80px', height: '1px', float: 'right', marginTop: 'auto' }} />
                                        <br />
                                        <p style={{ fontSize: '11px', lineHeight: '15px' }}>
                                            Bilingual website is offered· Fully adaptive website, for a visual that adapts according to the device used by your visitors· Several optional modules available: blog, scrolling banner, catalogue, image gallery, calendar, testimonials, etc.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-2 matters-icon">
                                    <img src={FullCustomizationIcon} alt="Full-Customization" title="Full-Customization" />
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-10 ecommerce-order">
                                    <div className="down-content-sub">
                                        <h6>No Time Lags</h6>
                                        <hr style={{ width: '80px', height: '1px', float: 'right', marginTop: 'auto' }} />
                                        <br />
                                        <p style={{ fontSize: '11px', lineHeight: '15px' }}>
                                            Your website is developed in time. Prismatic is a team of experts who focuses on creating a quality website for you in the shortest possible time.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-2 matters-icon">
                                    <img src={NoTimeLagsIcon} alt="No-Time-Lags" title="No-Time-Lags" />
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-10 ecommerce-order">
                                    <div className="down-content-sub">
                                        <h6>We Manage It For You</h6>
                                        <hr style={{ width: '80px', height: '1px', float: 'right', marginTop: 'auto' }} />
                                        <br />
                                        <p style={{ fontSize: '11px', lineHeight: '15px' }}>
                                            Your website comes with a manager that has experience with prismatic designed websites. We help give you the freedom to maintain your site content as you like.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-2 matters-icon">
                                    <img src={ManageItForYouIcon} alt="Manage-It-For-You" title="Manage-It-For-You" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="erp-detail erp pt-3">
                <div className="container erp-container" style={{ marginBottom: '10px' }}>
                    <div className="row mb-4">
                        <div className="col-md-12 make-unique">
                            <h5 className="title-heading text-center">
                                "Boost Your Online Business with Prismatic Technologies' Custom E-Commerce Website Development"
                            </h5>
                            <p className="mb-3">
                                Do you want to attain the right kind of success today? You get it by having an online presence, and this is especially critical for retail businesses. Prismatic Technologies, a software house in Lahore, specializes in delivering cutting-edge e-commerce website development in Pakistan that drives exponential growth for businesses, be it big or small. Our team of experts takes pride in understanding each client's unique needs and delivering customized e-commerce solutions that enhance the user experience and meet their specific requirements. You come first! Bring us your vision and let us handle the rest.
                            </p>
                            <p>
                                With a focus on innovation and user-centered design, we help businesses elevate their online presence and take their retail operations to the next level. Boost your online retail business today and look no further than Prismatic Technologies for custom e-commerce solutions that create success.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 make-unique">
                            <h2 className="title-heading">What Makes Us Stand Out?</h2>
                            <p className="pt-2 pb-2">
                                We understand that in order to give the best results to our clients, we need to stand out from the competition. That's why we take a strategic approach to each project, working closely with our clients to understand their needs. Our specialists then develop a customized solution that exceeds your expectations.
                            </p>
                            <p className="pt-2 pb-2">
                                Cost should not be a barrier to getting the best solutions, which is why we offer competitive pricing for all our services. Our clients can be assured that they are getting the best value for their investment.
                            </p>
                            <p className="pt-2 pb-2">
                                Finally, we understand that the success of a project depends not only on its functionality, but also on its user experience. That's why we focus on providing consumer-friendly solutions that are intuitive, easy to use, and deliver a seamless experience for end-users.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-12 make-unique">
                            <h2 className="title-heading">What Does Our Process Look Like?</h2>
                            <p className="pt-2 pb-2">
                                Our process starts with hearing you out. We take the time to understand your vision and what you hope to achieve through our services.
                            </p>
                            <p className="pt-2 pb-2">
                                Once we have a clear understanding of your requirements, we move on to the brainstorming phase, where we work together to develop innovative solutions that meet your needs. Our focus on creativity and innovation ensures that we always deliver cutting-edge solutions.
                            </p>
                            <p className="pt-2 pb-2">
                                Once we have a solution in place, we invite our clients to test it out and provide their feedback. This allows us to refine our solution and ensure that it meets the highest standards of quality and user experience. Finally, once you are satisfied with the solution, we finalize it, and you can begin using your website!
                            </p>
                        </div>
                    </div>

                    <div className="row mt-3 mb-3">
                        <div className="col-md-12 make-unique">
                            <h2 className="title-heading">What E-commerce Website Services Do We Offer?</h2>
                            <ul style={{ listStyle: 'disc' }} className="mt-3 mb-3 list-resp">
                                <li>Review of Business</li>
                                <li>Visualization Depending on Your Business Goals</li>
                                <li>Devising Content Strategy</li>
                                <li>Full Customization</li>
                                <li>No Time Lags</li>
                                <li>A Manager Is Provided</li>
                            </ul>
                            <p>
                                As you may have seen by now, we provide end-to-end solutions. This means once the process has been completed, we do not leave you to manage everything by yourself. We’re one place where you can come and find solutions for everything related to your e-commerce website development in Pakistan. Don’t wait more; get the right solutions and find all your needs met.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default E_Commerce