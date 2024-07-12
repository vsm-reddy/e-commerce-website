import React from 'react';
import rings1 from './images/ring.jpg';
import rings2 from './images/ring2.jpg';
import rings3 from './images/ring3.jpg';
import rings4 from './images/ring4.jpg';
import './Section.css';

const Rings = () => {
  return (
    <div className="section">
      <h2>Rings</h2>
      <div className="image-grid">
        <div className="image-item">
          <img src={rings1} alt="Rings 1" />
          <p>Stunning Ring 1</p>
        </div>
        <div className="image-item">
          <img src={rings2} alt="Rings 2" />
          <p>Stunning Ring 2</p>
        </div>
        <div className="image-item">
          <img src={rings3} alt="Rings 3" />
          <p>Stunning Ring 3</p>
        </div>
        <div className="image-item">
          <img src={rings4} alt="Rings 4" />
          <p>Stunning Ring 4</p>
        </div>
      </div>
    </div>
  );
};

export default Rings;
