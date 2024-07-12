import React from 'react';
import './AboutUs.css';
import earring from './images/about.jpg';

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={earring} alt="About Us" />
        </div>
        <div className="about-content">
          <h1>A Heritage Of Four Generations</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
