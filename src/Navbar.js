// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">InfiniteGleam</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/earrings">Earrings</Link></li>
        <li><Link to="/rings">Rings</Link></li>
        <li><Link to="/necklaces">Necklace</Link></li>
        <li><Link to="/account">My Account</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
