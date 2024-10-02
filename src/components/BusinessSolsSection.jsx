import './BusinessSolsSection.css';

const BusinessSolsSection = () => {
    return (
        <div className="more-info" data-aos="fade-up" data-aos-duration="3000">
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
                                <a href="https://www.prismatic-technologies.com/learning-management-system">Learning Management System</a>
                              </em>{' '}
                              catered according to your institution
                            </li>
                            <li>
                              <em style={{ color: 'black' }}>
                                <a href="https://www.prismatic-technologies.com/prismatic-crm-services">Customer Relationship Management Software</a>
                              </em>{' '}
                              for your unique customer portfolio
                            </li>
                            <li>
                              <em style={{ color: 'black' }}>
                                <a href="https://www.prismatic-technologies.com/erp-software-in-pakistan">Enterprise Resource Planning Software</a>
                              </em>{' '}
                              customized for your requirements
                            </li>
                            <li>
                              <em style={{ color: 'black' }}>
                                <a href="https://www.prismatic-technologies.com/e-commerce-service">Website Development</a>
                              </em>{' '}
                              so you can grow your business
                            </li>
                            <li>
                              <em style={{ color: 'black' }}>E-commerce website/phone app</em> for improved customer experience
                            </li>
                          </ul>
                        </p>
                        <a href="/about-us" className="p-read-more">
                          <button>Read More</button>
                        </a>
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