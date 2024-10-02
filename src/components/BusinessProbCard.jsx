import './BusinessProbCard.css';
import LMSImage from '../assets/icons/homepage-icons/color-icon/LMS.png';
import CRMImage from '../assets/icons/homepage-icons/color-icon/CRM.png';
import ERPIMage from '../assets/icons/homepage-icons/color-icon/Event-Management-Software.png';
import MobAppImage from '../assets/icons/homepage-icons/color-icon/Mobile-App.png';
import EMSImage from '../assets/icons/homepage-icons/color-icon/Event-Management-Software.png';
import POSImage from '../assets/icons/homepage-icons/color-icon/POS.png';
import HRMImage from '../assets/icons/homepage-icons/color-icon/HRM.png';
import ECOMImage from '../assets/icons/homepage-icons/color-icon/Ecomras-Website.png';
import DMImage from '../assets/icons/homepage-icons/color-icon/Digital-Marketing.png';

const businessCards = [
    {
        title: 'LMS Software',
        description: 'Empower your education and training system with our modern LMS software.',
        imgSrc: LMSImage,
        link: '/learning-management-system',
    },
    {
        title: 'Real Estate CRM',
        description: 'Enhance your real estate operations with our robust CRM software solution.',
        imgSrc: CRMImage,
        link: 'https://crmprismatic.com/',
    },
    {
        title: 'ERP Software',
        description: "Maximize your business operational efficiency with Prismatic's ERP software.",
        imgSrc: ERPIMage,
        link: '/erp-software-in-pakistan',
    },
    {
        title: 'Mobile App',
        description: 'Elevating your ease and connectivity through our revolutionary mobile app!',
        imgSrc: MobAppImage,
        link: '/mobile-app-development',
    },
    {
        title: 'Event Management Software',
        description: 'Hike-up your events to new heights with our event management software.',
        imgSrc: EMSImage,
        link: '#',
    },
    {
        title: 'POS Software',
        description: 'Equip your business with in-depth transaction tracking and management via our POS.',
        imgSrc: POSImage,
        link: '/pos-software-services',
    },
    {
        title: 'HRM Software',
        description: 'Enrich your HR operations with all-inclusive management through our HRM software.',
        imgSrc: HRMImage,
        link: '/hrm-software-services',
    },
    {
        title: 'Ecommerce Website',
        description: 'Revolutionize your online business with our proficient e-commerce website development.',
        imgSrc: ECOMImage,
        link: '/e-commerce-service',
    },
    {
        title: 'Digital Marketing',
        description: "Boost your sales and leads generation through Prismatic's digital marketing services.",
        imgSrc: DMImage,
        link: 'https://prismatrix.co/',
    },
];


const BusinessProbCard = () => {
    return (
        <div className="creative" data-aos="fade-up" data-aos-duration="3000">
            <div className="section-heading headingedit pt-5 pb-3">
                <h2>
                    How we solve your <em>business problems</em>
                </h2>
                <span style={{ fontSize: '12px' }}>
                    We have been helping retailers with cloud-based solutions to grow their businesses.
                </span>
            </div>
            <div className="container">
                {/* Yellow and white icon start */}
                <div className="row pris-color-pic">
                    {
                        businessCards.map((card, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <a href="/learning-management-system" className="sp-box">
                                    <div className="sp-inbox">
                                        <img
                                            src={card.imgSrc}
                                            loading="lazy"
                                            alt={card.title}
                                            title={card.title}
                                            className="sp-pic deft-img"
                                        />
                                        <img
                                            src={card.imgSrc}
                                            loading="lazy"
                                            alt={card.title}
                                            title={card.title}
                                            className="sp-pic hover-img"
                                        />
                                        <h3>{ card.title }</h3>
                                        <p style={{ margin: '0px' }}>
                                            { card.description }
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
                {/* Yellow and white icon End */}
            </div>
        </div>
    );
}

export default BusinessProbCard