// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="section-p1">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h2>About Us</h2>
          <p>Little Ones is an independent, female-founded label dedicated to creating luxury-grade
          product. We create is safe, gentle, and effective, using only the finest natural and organic ingredients.</p>
        </div>
        <div className="footer-section shop">
          <h2>Shop</h2>
          <ul>
            <li><a href="#">Shop All</a></li>
            <li><a href="#">Subscribe & Save</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>
        <div className="footer-section explore">
          <h2>Explore</h2>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">In The Blog</a></li>
            <li><a href="#">Our Ingredients</a></li>
          </ul>
        </div>
        <div className="footer-section support">
          <h2>Contact</h2>
          <p><strong>Address:</strong> Boudha-Fulbari, Kathmandu</p>
          <p><strong>Phone:</strong> +977 9801762592 / 5716201</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon-Sat</p>
          <div className="follow">
            <h2>Follow Us</h2>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
            </div>
          </div>
        </div>
        <div className="footer-section subscribe">
          <h2>Sign Up & Save 15%</h2>
          <p>Get a 15% discount on your first order.</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023, LITTLEONES. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
