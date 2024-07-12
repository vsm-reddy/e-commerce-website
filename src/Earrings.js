import React from 'react';
import earrings1 from './images/earrings1.jpg';
import earrings2 from './images/earrings2.jpg';
import earrings3 from './images/earrings3.jpg';
import earrings4 from './images/earrings4.jpg';
import './Section.css';

const Earrings = () => {
  return (
    <div className="section">
      <h2>Earrings</h2>
      <div className="image-grid">
        <div className="image-item">
          <img src={earrings1} alt="Earrings 1" />
          <p>Beautiful Earrings 1</p>
        </div>
        <div className="image-item">
          <img src={earrings2} alt="Earrings 2" />
          <p>Beautiful Earrings 2</p>
        </div>
        <div className="image-item">
          <img src={earrings3} alt="Earrings 3" />
          <p>Beautiful Earrings 3</p>
        </div>
        <div className="image-item">
          <img src={earrings4} alt="Earrings 4" />
          <p>Beautiful Earrings 4</p>
        </div>
      </div>
    </div>
  );
};

export default Earrings;
