import './OurLocations.css';
import pakImage from '../assets/images/locations/pak.svg';
import USImage from '../assets/images/locations/usa.svg';
import KSAImage from '../assets/images/locations/saudi.svg';

const locationData = [
    {
        country: "Pakistan",
        address: "71-C3, Block C3, Gulberg III Lahore, Pakistan",
        imageSrc: pakImage,
        altText: "pakistan",
        titleText: "pakistan",
        mapLink: "https://goo.gl/maps/o7PrJqa55VNwNcYb9",
        contactLink: "/contact-us"
    },
    {
        country: "United States",
        address: "124 Broadkill Rd #797 Milton, DE 19968-1008, US",
        imageSrc: USImage,
        altText: "united states",
        titleText: "united states",
        mapLink: "https://goo.gl/maps/3YCQn2MnmL6YPfwi9",
        contactLink: "/contact-us"
    },
    {
        country: "Saudi Arabia",
        address: "RFKA8374, Salman Al Farisi, Al Khaleej, Riyadh, Saudi Arabia",
        imageSrc: KSAImage,
        altText: "saudi arabia",
        titleText: "saudi arabia",
        mapLink: "https://goo.gl/maps/YLDv86qn2xnwbnk39",
        contactLink: "/contact-us"
    }
];

const OurLocations = () => {
    return (
        <>
            <div className="section-heading headingedit pt-5 pb-3" data-aos="fade-up" data-aos-duration="3000">
                <span style={{ fontSize: '15px' }}>our locations</span>
                <h2>Becoming Globally <em style={{ color: '#0274B8' }}>Accessible</em></h2>
            </div>
            <div className="Locations-wrap" data-aos="fade-up" data-aos-duration="3000">
                {
                    locationData.map((location, index) => (
                        <div className="col-lg-3 col-md-6 mb-3 location-box" key={index}>
                            <div className="img-box">
                                    <img className="img-fluid" src={location.imageSrc} alt={location.altText} title={location.titleText} />  
                            </div>
                            <div className="location-detail">
                                <h4>{location.country}</h4>
                                <p>{location.address}</p>
                                <ul>
                                    <li><a href={location.mapLink} target="_blank"><i className="fa fa-map-marker"></i></a></li>
                                    <li><a href={location.contactLink}><i className="fa fa-phone"></i></a></li>
                                    <li><a href="/contact-us"><i className="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default OurLocations