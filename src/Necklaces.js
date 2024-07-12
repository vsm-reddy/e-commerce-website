import React from 'react';
import necklaces1 from './images/necklace1.jpg';
import necklaces2 from './images/necklace2.jpg';
import necklaces3 from './images/necklace3.jpg';
import necklaces4 from './images/necklace4.jpg';
import './Section.css';

const Necklaces = () => {
  return (
    <div className="section">
      <h2>Necklaces</h2>
      <div className="image-grid">
        <div className="image-item">
          <img src={necklaces1} alt="Necklaces 1" />
          <p>Elegant Necklace</p>
        </div>
        <div className="image-item">
          <img src={necklaces2} alt="Necklaces 2" />
          <p>Elegant Necklace 2</p>
        </div>
        <div className="image-item">
          <img src={necklaces3} alt="Necklaces 3" />
          <p>Elegant Necklace 3</p>
        </div>
        <div className="image-item">
          <img src={necklaces4} alt="Necklaces 4" />
          <p>Elegant Necklace 4</p>
        </div>
      </div>
    </div>
  );
};

export default Necklaces;
