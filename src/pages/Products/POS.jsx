import React from 'react';
import POSImg from '../../assets/icons/POS-icons/POS-Image.jpg';
import posImage1 from '../../assets/images/POS web page image 1.jpg';
import strengthenEfficiencyIcon from '../../assets/icons/POS-icons/Strengthen-Efficiency.png';
import increaseSalesIcon from '../../assets/icons/POS-icons/Increase-Sales.png';
import makeInformedDecisionsIcon from '../../assets/icons/POS-icons/Make-Informed-Decisions.png';
import posImage2 from '../../assets/images/POS web page image 2.jpg';
import multipleCashIcon from '../../assets/icons/POS-icons/Multiple-cash.png';
import easyInterfaceIcon from '../../assets/icons/POS-icons/Easy-to-user-interface.png';
import endOfDayIcon from '../../assets/icons/POS-icons/End-of-day-close-out.png';
import timeCardIcon from '../../assets/icons/POS-icons/Integrated-with-time-card.png';
import freightIcon from '../../assets/icons/POS-icons/Freight-available.png';
import directInterfaceIcon from '../../assets/icons/POS-icons/Direct-interface.png';
import inventoryIcon from '../../assets/icons/POS-icons/Maintain-and-monitor-inventory-availability.png';
import multipleStoresIcon from '../../assets/icons/POS-icons/Multiple-Stores.png';
import cashDrawerIcon from '../../assets/icons/POS-icons/Cash-drawer-balancing.png';
import taxOptionsIcon from '../../assets/icons/POS-icons/Multiple-tax-table-options.png';
import serialTrackingIcon from '../../assets/icons/POS-icons/Serial-number-and-lot-tracking.png';
import commissionTrackingIcon from '../../assets/icons/POS-icons/Commission-tracking.png';
import posImage3 from '../../assets/images/POS web page iMAGE 3.jpg';
import '../../assets/css/POS.css';

const POS = () => {
    const leftFeatures = [
        { icon: directInterfaceIcon, title: 'Direct interface with General Ledger' },
        { icon: multipleCashIcon, title: 'Multiple cash registers' },
        { icon: easyInterfaceIcon, title: 'Easy to use interface' },
        { icon: endOfDayIcon, title: 'End of day close out' },
        { icon: timeCardIcon, title: 'Integrated with time card' },
        { icon: freightIcon, title: 'Freight available' },
    ];

    const rightFeatures = [
        { icon: inventoryIcon, title: 'Maintain and monitor inventory availability' },
        { icon: multipleStoresIcon, title: 'Multiple Stores' },
        { icon: cashDrawerIcon, title: 'Cash drawer balancing' },
        { icon: taxOptionsIcon, title: 'Multiple tax table options' },
        { icon: serialTrackingIcon, title: 'Serial number and lot tracking' },
        { icon: commissionTrackingIcon, title: 'Commission tracking' },
    ];

    const uniqueFeatures = [
        {
            title: 'Cultivate Efficiency',
            description: 'Our POS software is designed to simplify and streamline retail operations, allowing businesses to focus on what really matters - serving their customers and growing their business.'
        },
        {
            title: 'Boost Sales',
            description: 'With features like inventory management, customer tracking, and real-time sales reporting, our POS software is designed to help businesses increase sales and boost profitability.'
        },
        {
            title: 'Build a Business Strategy',
            description: 'Our POS software in Pakistan provides businesses with valuable insights and data that can be used to develop a solid business strategy. From tracking sales and customer behavior to analyzing inventory and staffing needs, our software provides the information businesses need to succeed.'
        }
    ];

    const featuresList = [
        'Direct interface with General Ledger',
        'Multiple cash registers',
        'Easy to use interface',
        'End of day close out',
        'Integrated with time card',
        'Freight available',
        'Maintain and monitor inventory availability',
        'Multiple Stores',
        'Cash drawer balancing',
        'Multiple tax table options',
        'Serial number and lot tracking',
        'Commission tracking'
    ];
    return (
        <>
            <div className="products-header-wrapper">
                <img src={POSImg} alt="Point of sale" title="Point of sale" draggable={false} />
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
                                <img src={posImage1} alt="POS-web-page" title="POS-web-page" draggable={false} />
                                <div className="down-content"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item flexsys">
                                <div className="col-md-2 matters-icon app-icon">
                                    <img src={strengthenEfficiencyIcon} alt="Strengthen Efficiency" title="Strengthen Efficiency" draggable={false} />
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
                                    <img src={increaseSalesIcon} alt="Increase Sales" title="Increase Sales" draggable={false} />
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
                                    <img src={makeInformedDecisionsIcon} alt="Make Informed Decisions" title="Make Informed Decisions" draggable={false} />
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

            <div className="erp pt-5 pb-5" style={{ background: 'rgba(218, 218, 218, 0.432)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 custom-space">
                            <div className="section-heading">
                                <h2>We Develop What You Want</h2>
                            </div>
                        </div>

                        {/* Left Column */}
                        <div className="col-lg-4 col-md-12 col-sm-12" style={{ lineHeight: '40px' }}>
                            {leftFeatures.map((feature, index) => (
                                <div className="service-item flexsys" key={index}>
                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10 pos-order">
                                        <div className="down-content-sub">
                                            <h6>{feature.title}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 p-0 pos-style pos-order-2">
                                        <img src={feature.icon} alt={feature.title} title={feature.title} draggable={false} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Middle Column with Image */}
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="service-item">
                                <img src={posImage2} alt="POS-web-page" title="POS-web-page" draggable={false} />
                                <div className="down-content"></div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-4 col-md-12 col-sm-12" style={{ lineHeight: '40px' }}>
                            {rightFeatures.map((feature, index) => (
                                <div className="service-item flexsys" key={index}>
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 p-0 pos-style">
                                        <img src={feature.icon} alt={feature.title} title={feature.title} draggable={false} />
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                        <div className="down-content-sub">
                                            <h6>{feature.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="erp pt-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="col-md-12">
                                <div className="section-heading-sub ">
                                    <h4 style={{ textAlign: 'left' }}>Convert Your Smartphone or Tablet Into A Convenient POS</h4>
                                    <span style={{ fontSize: '12px', textAlign: 'left', lineHeight: '37px' }}>Do you still have cash registers? Don’t stay in the dark-ages. Switch to new cash registers which is more user-friendly and modern. Confused about what a POS is? It can be an entire department store, a market or a city. After all, these are all places where something can be bought or sold! But POS is a software that helps with inventory and buying and selling!</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <img src={posImage3} alt="POS-web-page" title="POS-web-page" draggable={false} />
                                <div className="down-content">
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
                                "Streamline Retail Operations with Innovative POS Software: A Solution for Every Business"
                            </h5>
                            <p className="mb-3">
                                Retail stops for no one! Having a reliable and efficient point of sale (POS) system is crucial for success if you want to survive. Whether you're a small business or a large chain, Prismatic Technologies' POS software in Pakistan offers the tools you need to streamline your operations and enhance your customers' shopping experience. Our brilliant software solutions are designed to help businesses of all sizes maximize efficiency, boost sales, and provide an exceptional customer experience.
                            </p>
                            <p>
                                Our team of experts understands the unique needs of retailers and is dedicated to delivering custom solutions that meet those needs. With Prismatic Technologies, you'll get a tailored solution that is specifically designed to meet the requirements of your business, ensuring that you get the results you need to succeed in today's competitive retail environment."
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-heading">What Makes Us Unique?</h2>
                            {uniqueFeatures.map((feature, index) => (
                                <div className="make-unique mb-3" key={index}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row mt-3 mb-3">
                        <div className="col-md-12">
                            <h2 className="title-heading">What Do We Develop for You in Point-of-Sale Software in Pakistan?</h2>
                            <ul style={{ listStyle: 'disc' }} className="list-resp">
                                {featuresList.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-12 make-unique">
                            <h2 className="title-heading">Find the Right Solutions</h2>
                            <p className="pt-2 pb-2">
                                Converting your smartphone or tablet into a POS system software in Pakistan can bring a multitude of benefits to your business. Firstly, it offers the convenience of mobility, allowing you to serve customers and process transactions from anywhere within your store. Additionally, it provides real-time data tracking and analysis, giving you valuable insights into your sales, inventory, and customer behavior. Furthermore, it streamlines your sales process and helps to speed up checkout times, leading to increased customer satisfaction and reduced lines. By adopting a smartphone or tablet POS software, you can cultivate efficiency, boost sales and build a more strategic, data-driven business.
                            </p>
                            <p className="pt-2 pb-2">
                                POS software in Pakistan services is crucial for stores as they help streamline operations, improve customer experiences, and increase sales. A modern POS system not only facilitates transactions but also helps with inventory management, customer relationship management, and data analysis. Having real-time data at your fingertips can help businesses make informed decisions and ensure that they never run out of stock. Additionally, with features such as customer loyalty programs, mobile payments, and digital receipts, businesses can offer customers a seamless and efficient shopping experience.
                            </p>
                            <p className="pt-2 pb-2">
                                In today's highly competitive retail environment, a reliable and efficient Point of sale Software in Pakistan is crucial for a store's success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default POS