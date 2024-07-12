// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate=useNavigate();
  const handleShopNowClick=() => {
    navigate('/store');
  };
  return (
    <div className="home">
          <div className="hero-section">
        <h1>Him & Her</h1>
        <p>Royal Diamond Collection</p>
        <p>Eternal Elegance, Infinite Shine: Discover Your Perfect Diamond</p>
        <button className="shop-now-btn" onClick={handleShopNowClick}>Shop Now</button>
      </div>
      
         </div>
  );
};

export default Home;