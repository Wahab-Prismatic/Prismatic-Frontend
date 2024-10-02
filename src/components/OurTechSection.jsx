import React from 'react'
import './OurTechSection.css';
import frameworkImage from '../assets/images/frame-work-icon.png';
import cmsImage from '../assets/images/cms-icon.jpg';
import eCommImage from '../assets/images/ecommerce-icon.jpg';
import MobDevelopImage from '../assets/images/mobile-develempment-icon.png';
import designingImage from '../assets/images/desgining-icon.png';
import IntegrationImage from '../assets/images/integration.png';

const OurTechSection = () => {
  return (
    <div className="container-fluid p-5 technology" data-aos="fade-up" data-aos-duration="3000">
      <div className="row">
          <div className="tech-Heading">
              <h3 className="mb-5">Our technologies</h3>
          </div>
          <div className="col-12">
              <div className="row">
                  <div className="col-xl-4 col-md-6 px-sm-2 mb-3 px-0">
                      <div className="d-sm-flex px-sm-2 px-0">
                          <div className="text-center">
                              <img src={frameworkImage} className="rounded-circle" alt="frame-work-icon" width="90px" height="90px" />
                          </div>
                          <div className="mx-sm-3">
                              <h5 className="mb-0 px-sm-2 mt-sm-0 mt-2">Frameworks</h5>
                              <p className="px-sm-2">We work on cutting-edge technologies like ASP.Net, AngularJs, ReactJs, VueJs, React Native, Node.Js, latest html techniques for more attractive user interface.</p>
                          </div>
                          <div className="line-vertical"></div>
                      </div>
                      <div className="line-horizontal"></div>
                  </div>
                  <div className="col-xl-4 col-md-6 px-sm-2 mb-3 px-0">
                      <div className="d-sm-flex px-sm-2 px-0">
                          <div className="text-center">
                              <img src={cmsImage} className="rounded-circle" alt="cms-icon" width="90px" height="90px" />
                          </div>
                          <div className="mx-sm-3">
                              <h5 className="mb-0 px-sm-2 mt-sm-0 mt-2">CMS</h5>
                              <p className="px-sm-2">We provide complete solution for content management by using the advanced and latest technology based CMS (Umbraco, Kentico , Wordpress).</p>
                          </div>
                          <div className="cms-line-vertical"></div>
                      </div>
                      <div className="line-horizontal"></div>
                  </div>
                  <div className="col-xl-4 col-md-6 px-sm-2 mb-3 px-0">
                      <div className="d-sm-flex px-sm-2 px-0">
                          <div className="text-center">
                              <img src={eCommImage} className="rounded-circle" alt="ecommerce-icon" width="90px" height="90px" />
                          </div>
                          <div className="mx-sm-3">
                              <h5 className="mb-0 px-sm-2 mt-sm-0 mt-2">Ecommerce Solution</h5>
                              <p className="px-sm-2">Wordpress/ WooCommerce is the most popular CMS for the Ecommerce solutions however we have also provide the Umbraco solutions as well.</p>
                          </div>
                          <div className="ecommerceVertical"></div>
                      </div>
                      <div className="line-horizontal"></div>
                  </div>
                  <div className="col-xl-4 col-md-6 px-sm-2 mb-3 px-0">
                      <div className="d-sm-flex px-sm-2 px-0">
                          <div className="text-center">
                              <img src={MobDevelopImage} className="rounded-circle" alt="mobile-develempment-icon" width="90px" height="90px" />
                          </div>
                          <div className="mx-sm-3">
                              <h5 className="mb-0 px-sm-2 mt-sm-0 mt-2">Mobile Development</h5>
                              <p className="px-sm-2">Our mobile development expert team develop newest styles in Mobile App and generate matchlessly and advance solutions for business growth.</p>
                          </div>
                          <div className="mobDev-vertical"></div>
                      </div>
                      <div className="mobDev-horizontal"></div>
                  </div>
                  <div className="col-xl-4 col-md-6 px-sm-2 mb-3 px-0">
                      <div className="d-sm-flex px-sm-2 px-0">
                          <div className="text-center">
                              <img src={designingImage} className="rounded-circle" alt="desgining-icon" width="90px" height="90px" />
                          </div>
                          <div className="mx-sm-3">
                              <h5 className="mb-0 px-sm-2 mt-sm-0 mt-2">Design Work</h5>
                              <p className="px-sm-2">Our team creates the intuitive user experiences wrapped up in the beautiful designs using latest technologies according to the specifications.</p>
                          </div>
                          <div className="line-vertical"></div>
                      </div>
                      <div className="design-horizontal"></div>
                  </div>
                  <div className="col-xl-4 col-md-6 px-sm-2 mb-3 px-0">
                      <div className="d-sm-flex px-sm-2 px-0">
                          <div className="text-center">
                              <img src={IntegrationImage} className="rounded-circle" alt="Integrations-icon" width="90px" height="90px" />
                          </div>
                          <div className="mx-3">
                              <h5 className="mb-0 px-sm-2 mt-sm-0 mt-2">Integrations</h5>
                              <p className="px-sm-2">Our team ensures seamless connectivity and collaboration across various components, enabling your software to operate at its full potential.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div>
  )
}

export default OurTechSection