import React from 'react'
import './TrustPrisSection.css';

const TrustPrisSection = () => {
  return (
    <div className="fun-facts" data-aos="fade-up" data-aos-duration="3000">
      <div className="container">
          <div className="row">
              <div className="col-lg-6 col-md-12">
                  <div className="left-content">
                      <h2>Why Trust Prismatic?</h2>
                      <p>With a portfolio of national and international clients successfully using our tailormade software,
                          we are here to provide you with the best experience. We are an aspiring company,
                          working day and night to position ourselves as a global technology.
                          <br/><br/>
                          Get in touch with us today for quick business management solutions at market-competitive prices.
                      </p>
                      <a href="about-us" className="p-read-more"><button>Read More</button></a>
                  </div>
              </div>
              <div className="col-lg-6 col-md-12 align-self-center">
                  <div className="row">
                      <div className="col-md-6 col-sm-6">
                          <div className="count-area-content">
                              <div className="count-digit">103</div>
                              <div className="count-title">Projects</div>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                          <div className="count-area-content">
                              <div className="count-digit">64</div>
                              <div className="count-title">Clients</div>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                          <div className="count-area-content">
                              <div className="count-wrap">
                                  <div className="count-digit">100</div><span style={{ margin: '5px 0px', color: '#ffbf34', fontWeight: 700, fontSize: '25px' }}>%</span>

                              </div>
                              <div className="count-title">Satisfaction Rate</div>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                          <div className="count-area-content">
                              <div className="count-digit">42</div>
                              <div className="count-title">Team</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default TrustPrisSection;