import React from 'react'
import './WhyChooseCardSection.css';
import { ChooseUsData } from '../services/WhyChooseCardService';

const WhyChooseCardSection = () => {
  return (
    <div className="container mb-5" data-aos="fade-up" data-aos-duration="3000">
      <h3 className="m-5 text-center" style={{color: '#3E4357', fontSize: '22px', fontWeight: '600'}}>Why choose us</h3>
      <div className="row mx-auto">
          {
            ChooseUsData.map((item, index) => (
                <div className="col-lg-3 col-md-6 mb-3" key={index}>
              <div className="p-4 chooseBox">
                  <h5>{ item.title }</h5>
                  <p>{item.description}</p>
              </div>
          </div>
            ))
          }
      </div>
  </div>
  )
}

export default WhyChooseCardSection