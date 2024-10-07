import React from 'react';
import POSImg from '../../assets/icons/POS-icons/POS-Image.jpg';
import posImage1 from '../../assets/images/POS web page image 1.jpg';
import strengthenEfficiencyIcon from '../../assets/icons/POS-icons/Strengthen-Efficiency.png';
import increaseSalesIcon from '../../assets/icons/POS-icons/Increase-Sales.png';
import makeInformedDecisionsIcon from '../../assets/icons/POS-icons/Make-Informed-Decisions.png';
import '../../assets/css/POS.css';

const POS = () => {
    return (
        <>
            <div className="products-header-wrapper">
                <img src={POSImg} alt="Point of sale" title="Point of sale" />
                <div className="P-header-text text-content">
                    <h6>User-friendly Point of Sale Software</h6>
                    <h4 style={{ fontSize: '22px' }}>Our POS software is set up in just minutes, allows you to sell in seconds and works with every device.</h4> </div>
            </div>

            <div className="erp pt-5">
                <div className="container erp-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>
                                    Point of Sale <em> Services</em>
                                </h2>
                                <span style={{ fontSize: '12px' }}></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <img src={posImage1} alt="POS-web-page" title="POS-web-page" />
                                <div className="down-content"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon app-icon">
                                    <img src={strengthenEfficiencyIcon} alt="Strengthen Efficiency" title="Strengthen Efficiency" />
                                </div>
                                <div className="col-md-10 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Cultivate Efficiency</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            Our POS levers build staff’s confidence. They do not have to memorize the name of products and prices.
                                            They can then give better customer service too. Besides this, you can quickly process numerous types
                                            of payments. Save your time spent on paperwork, accounting, and inventories. All in all? There’s a lot
                                            of efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon app-icon">
                                    <img src={increaseSalesIcon} alt="Increase Sales" title="Increase Sales" />
                                </div>
                                <div className="col-md-10 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Boost Sales</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            POS can provide your business with many ways to maximize sales in retail. Enhance your bottom line by
                                            incorporating POS strategies into your operations. Our user-friendly system speeds up checkout making
                                            customer experience seamless. The best part? Your customers can find a product exclusively at one
                                            location.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon app-icon">
                                    <img src={makeInformedDecisionsIcon} alt="Make Informed Decisions" title="Make Informed Decisions" />
                                </div>
                                <div className="col-md-10 matters-desc">
                                    <div className="down-content-sub">
                                        <h6>Build A Business Strategy</h6>
                                        <p style={{ fontSize: '12px' }}>
                                            Prism POS collects data related to significant areas of your business. It collects transactions,
                                            inventory, employees, and more to give you crucial data. For a successful business owner, that data is
                                            a massive resource they can leverage for strategic decision-making.
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

export default POS