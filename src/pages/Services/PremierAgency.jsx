import ChicagoImg from '../../assets/images/chicago-banner.jpg';
import BusinessGrowthImg from '../../assets/images/e376a297ad.jpg';
import ProoductCollabIcon from '../../assets/icons/productive-collaboration.png';
import HandleFinanceIcon from '../../assets/icons/Handles-Costs-and-Finances.png';
import CustomerExpIcon from '../../assets/icons/Awesome-Customer-Experience.png';
import GrowthImg from '../../assets/images/b20d591592.jpg';
import ErpImage from '../../assets/images/erp2.jpg';
import GeneralLedgerIcon from '../../assets/icons/General-Ledger.png';
import InventoryManagementIcon from '../../assets/icons/Inventory-Management-System.png';
import HRMIcon from '../../assets/icons/HRM.png';
import '../../assets/css/PremierAgency.css';

const PremierAgency = () => {
    return (
        <>
            {/* <!-- Banner Starts Here --> */}
            <div className="products-header-wrapper">
                <img src={ChicagoImg} alt="erp" title="erp" draggable={false} />
                <div className="P-header-text text-content">
                    <h4>Unlock the power of DIGITAL MARKETING <br /> with our expert team in CHICAGO</h4> </div>
            </div>
            {/* <!-- Banner Ends Here --> */}
            <div className="erp pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>A Premier Advertising Agency in Chicago!</h2>
                                <h3 className="mt-3" style={{ fontSize: '14px' }}>At Prismatic Technologies, we pride ourselves on being the leading advertising agency in Chicago,
                                    dedicated to transforming your brand into a captivating narrative that resonates with your target audience. Our innovative approach
                                    and strategic campaigns have positioned us as a trusted partner for businesses looking to make a lasting impact in the dynamic market
                                    of Chicago. Join us on this transformative journey in the world of digital marketing!
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="down-content-sub section-title-content text-center">
                                <h2 >Prismatic Advertising Services in Chicago include </h2>
                                <h5 style={{ fontSize: '14px', fontWeight: '400' }}>Prismatic Advertising Services in Chicago encompass a full spectrum of strategies, from innovative
                                    digital campaigns and captivating content creation to traditional media excellence.</h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item"> <img style={{ width: '100%', borderRadius: '20px' }} src={BusinessGrowthImg} alt="erp" title="erp" />
                                <div className="down-content"> </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="service-item flexsys row">
                                <div className="col-lg-2 col-md-3 matters-icon"> <img src={ProoductCollabIcon} alt="productive-collaboration" title="productive-collaboration" /> </div>
                                <div className="col-lg-10 col-md-9 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Search Engine Optimization (SEO): </h6>
                                        <p style={{ fontSize: '12px' }}>Boost online visibility and search ranking with tailored SEO strategies, ensuring targeted traffic and brand authority through continuous optimization for evolving search engine algorithms.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys row">
                                <div className="col-lg-2 col-md-3 matters-icon"> <img src={HandleFinanceIcon} alt="Handles-Costs-and-Finances" title="Handles-Costs-and-Finances" /> </div>
                                <div className="col-lg-10 col-md-9 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Social Media Marketing:</h6>
                                        <p style={{ fontSize: '12px' }}>Implement targeted and data-driven PPC campaigns for instant visibility, maximize ROI with strategic keyword targeting and ad placement, and ensure ongoing cost-effectiveness through continuous monitoring and optimization.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys row">
                                <div className="col-lg-2 col-md-3 matters-icon"> <img src={CustomerExpIcon} alt="Awesome-Customer-Experience" title="Awesome-Customer-Experience" /> </div>
                                <div className="col-lg-10 col-md-9 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Pay-Per-Click (PPC) Advertising:</h6>
                                        <p style={{ fontSize: '12px' }}>Our software simplifies interaction with customers by monitoring their data and buying trends, so you can ALWAYS stay in the loop.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{marginTop: '42px'}}>
                        <div className="col-md-6">
                            <div className="service-item flexsys row">
                                <div className="col-lg-2 col-md-3 matters-icon"> <img src={GeneralLedgerIcon} alt="General-Ledger" title="General-Ledger" /> </div>
                                <div className="col-lg-10 col-md-9 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Content Marketing:</h6>
                                        <p style={{ fontSize: '12px' }}>Create engaging and valuable content across platforms, including blogs, videos, and infographics, to establish thought leadership and foster trust with your target audience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys row">
                                <div className="col-lg-2 col-md-3 matters-icon"> <img src={InventoryManagementIcon} alt="Inventory-Management-System" title="Inventory-Management-System" /> </div>
                                <div className="col-lg-10 col-md-9 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Email Marketing:</h6>
                                        <p style={{ fontSize: '12px' }}>Execute personalized email campaigns to nurture leads, implement automated workflows for timely communication, and leverage analytics-driven insights to optimise email performance.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys row">
                                <div className="col-lg-2 col-md-3 matters-icon"> <img src={HRMIcon} alt="Awesome-Customer-Experience" title="Awesome-Customer-Experience" /> </div>
                                <div className="col-lg-10 col-md-9 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Analytics and Reporting:</h6>
                                        <p style={{ fontSize: '12px' }}>Utilise data-driven insights to measure and analyse campaign performance, provide transparent reporting on key performance indicators (KPIs), and continuously refine strategies based on real-time analytics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item"> <img style={{ width: '100%', borderRadius: '20px' }} src={GrowthImg} alt="erp" title="erp" />
                                <div className="down-content"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="erp pt-5" style={{ background: 'rgba(218, 218, 218, 0.432)' }}>
                <div className="container" style={{ marginBottom: '20px' }}>
                    <div className="row choose">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Why Choose Prismatic Technologies</h2>
                                <span style={{ fontSize: '12px' }}>
                                    Opt for Prismatic Technologies in Chicago for top-notch advertising prowess that combines strategic vision, creative excellence, and a data-driven approach.
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <img
                                    style={{ width: '100%', borderRadius: '20px' }}
                                    src={ErpImage}
                                    alt="erp"
                                    title="erp"
                                />
                                <div className="down-content"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item flexsys row">
                                <div className="col-lg-2 col-md-3 matters-icon">
                                    <img src={GeneralLedgerIcon} alt="General-Ledger" title="General-Ledger" />
                                </div>
                                <div className="col-lg-10 col-md-9 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Proven Track Record:</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            With a track record of successful campaigns and satisfied clients, we have established ourselves as a reliable partner for businesses seeking impactful advertising solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys row">
                                <div className="col-lg-2 col-md-3 matters-icon">
                                    <img src={InventoryManagementIcon} alt="Inventory-Management-System" title="Inventory-Management-System" />
                                </div>
                                <div className="col-lg-10 col-md-9 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Client-Centric Approach</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            Your success is our priority. We work closely with clients to understand their goals, challenges, and vision, allowing us to develop strategies that align with their unique objectives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys row">
                                <div className="col-lg-2 col-md-3 matters-icon">
                                    <img src={HRMIcon} alt="HRM" title="HRM" />
                                </div>
                                <div className="col-lg-10 col-md-9 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Industry Expertise</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            Our diverse team of professionals brings diverse knowledge, staying updated on industry trends and technological advancements to keep your brand at the forefront.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys row">
                                <div className="col-lg-2 col-md-3 matters-icon">
                                    <img src={HRMIcon} alt="HRM" title="HRM" />
                                </div>
                                <div className="col-lg-10 col-md-9 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Transparent Communication</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            Communication is key to a successful partnership. We maintain open and transparent communication channels, keeping you informed at every step of the advertising process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PremierAgency