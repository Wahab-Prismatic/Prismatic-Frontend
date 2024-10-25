import '../assets/css/OurTechSection.css';
import { techData } from '../services';

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
