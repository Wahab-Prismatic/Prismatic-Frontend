import { Link } from 'react-router-dom';
import './BusinessSolsSection.css';

const BusinessSolsSection = () => {
    return (
        <div className="more-info" data-aos-duration="3000">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="more-info-content">
                  <div className="row">
                    <div className="col-md-12 col-lg-6 mb-3" style={{ paddingRight: '0px', paddingLeft: '0px' }}>
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                          width="220"
                          height="360"
                          src="https://www.youtube.com/embed/6Q4u07NATvk?modestbranding=1&autoplay=1&mute=1&showinfo=0&loop=1&playlist=6Q4u07NATvk"
                          title="INTRODUCTION - PRISMATIC TECHNOLOGIES LIMITED"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 mb-3 align-self-center" style={{ paddingRight: '0px', paddingLeft: '0px' }}>
                      <div className="right-content">
                        <span>What we do</span>
                        <h2 className="v-heading" style={{ fontSize: '34px' }}>
                          Business <em>Solutions</em> catered to your needs
                        </h2>
                        <p>
                          <ul className="video-side-content" style={{ listStyle: 'square', paddingLeft: '20px' }}>
                            <li>
                              <em style={{ color: 'black' }}>
                                <Link to="/products/learning-management-system" onClick={() => window.scrollTo(0, 0)}>Learning Management System</Link>
                              </em>{' '}
                              catered according to your institution
                            </li>
                            <li>
                              <em style={{ color: 'black' }}>
                                <Link to="https://www.prismatic-technologies.com/prismatic-crm-services" target='_blank' onClick={() => window.scrollTo(0, 0)}>Customer Relationship Management Software</Link>
                              </em>{' '}
                              for your unique customer portfolio
                            </li>
                            <li>
                              <em style={{ color: 'black' }}>
                                <Link to="/products/erp-software-in-pakistan" onClick={() => window.scrollTo(0, 0)}>Enterprise Resource Planning Software</Link>
                              </em>{' '}
                              customized for your requirements
                            </li>
                            <li>
                              <em style={{ color: 'black' }}>
                                <Link to="/services/e-commerce-service" onClick={() => window.scrollTo(0, 0)}>Website Development</Link>
                              </em>{' '}
                              so you can grow your business
                            </li>
                            <li>
                              <em style={{ color: 'black' }}>E-commerce website/phone app</em> for improved customer experience
                            </li>
                          </ul>
                        </p>
                        <Link 
                          to="/about-us" 
                          className="p-read-more"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <button>Read More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default BusinessSolsSection