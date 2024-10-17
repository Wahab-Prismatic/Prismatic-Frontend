import React from 'react';
import './OurTechSection.css';
import frameworkImage from '../assets/images/frame-work-icon.png';
import cmsImage from '../assets/images/cms-icon.jpg';
import eCommImage from '../assets/images/ecommerce-icon.jpg';
import MobDevelopImage from '../assets/images/mobile-develempment-icon.png';
import designingImage from '../assets/images/desgining-icon.png';
import IntegrationImage from '../assets/images/integration.png';

const techData = [
  {
    image: frameworkImage,
    title: 'Frameworks',
    description: 'We work on cutting-edge technologies like ASP.Net, AngularJs, ReactJs, VueJs, React Native, Node.Js, latest html techniques for more attractive user interface.',
  },
  {
    image: cmsImage,
    title: 'CMS',
    description: 'We provide complete solutions for content management using the latest technology-based CMS (Umbraco, Kentico, WordPress).',
  },
  {
    image: eCommImage,
    title: 'Ecommerce Solution',
    description: 'WordPress/WooCommerce is popular for Ecommerce solutions, but we also offer Umbraco solutions as well.',
  },
  {
    image: MobDevelopImage,
    title: 'Mobile Development',
    description: 'Our expert mobile development team creates innovative mobile apps, delivering unique and advanced solutions for business growth.',
  },
  {
    image: designingImage,
    title: 'Design Work',
    description: 'Our team creates intuitive user experiences wrapped in beautiful designs, leveraging the latest technologies according to specifications.',
  },
  {
    image: IntegrationImage,
    title: 'Integrations',
    description: 'Our team ensures seamless connectivity and collaboration across various components, enabling software to operate at its full potential.',
  },
];

const OurTechSection = () => {
  return (
    <div className="container-fluid p-5 technology" data-aos="fade-up" data-aos-duration="3000">
      <div className="row">
        <div className="tech-Heading">
          <h3 className="mb-5">Our Technologies</h3>
        </div>
        <div className="col-12">
          <div className="row">
            {techData.map((tech, index) => (
              <div key={index} className="col-xl-4 col-md-6 px-sm-2 mb-3 px-0">
                <div className="d-sm-flex px-sm-2 px-0">
                  <div className="text-center">
                    <img src={tech.image} className="rounded-circle" alt={`${tech.title}-icon`} width="90px" height="90px" />
                  </div>
                  <div className="mx-sm-3">
                    <h5 className="mb-0 px-sm-2 mt-sm-0 mt-2">{tech.title}</h5>
                    <p className="px-sm-2">{tech.description}</p>
                  </div>
                  <div className="line-vertical"></div>
                </div>
                <div className="line-horizontal"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTechSection;
