import React from 'react';
import necklaces1 from './images/ring4.jpg';
import necklaces2 from './images/necklace2.jpg';
import necklaces3 from './images/earrings1.jpg';
import necklaces4 from './images/ring3.jpg';
import './Section.css';

const Store = () => {
  return (
    <div className="section">
      <h2>Look Even More Goregeous</h2>
      <div className="image-grid">
        <div className="image-item">
          <img src={necklaces1} alt="Necklaces 1" />
          <p>Rings</p>
        </div>
        <div className="image-item">
          <img src={necklaces2} alt="Necklaces 2" />
          <p>Necklaces</p>
        </div>
        <div className="image-item">
          <img src={necklaces3} alt="Necklaces 3" />
          <p>Earrings</p>
        </div>
        <div className="image-item">
          <img src={necklaces4} alt="Necklaces 4" />
          <p>Couple rings</p>
        </div>
      </div>
    </div>
  );
};

export default Store;
