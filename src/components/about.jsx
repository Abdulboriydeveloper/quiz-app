import React from "react";
import '../assets/css/about.css';
import AboutImg from '../assets/img/ai-technology-microchip-background-digital-transformation-concept_937196-69.avif'

export const About = () => {
  const whyData = [
    "Reason 1",
    "Reason 2",
    "Reason 3",
  ];

  const why2Data = [
    "Reason 4",
    "Reason 5",
    "Reason 6",
  ];

  return (
    <div id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={AboutImg} className="img-responsive about-image" alt="About us" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {whyData.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {why2Data.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
