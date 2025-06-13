'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Sell Your Bike</a></li>
              <li><a href="#">Bike Loans</a></li>
              <li><a href="#">Insurance</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Top Brands</h4>
            <ul>
              <li><a href="#">Royal Enfield</a></li>
              <li><a href="#">Bajaj</a></li>
              <li><a href="#">TVS</a></li>
              <li><a href="#">Hero</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Vinay Motors. All Rights Reserved.  </p>
          <a href='#'>Designed by Ezycost Solution.</a>
        </div>
      </div>

      <style>{`
        :root {
          --dark-color: #222;
          --white-color: #fff;
          --primary-color: #e65c00;
          --gray-color: #444;
        }

        footer {
          background-color: var(--dark-color);
          color: var(--white-color);
          padding: 60px 0 30px;
        }

        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-content h4 {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: var(--primary-color);
        }

        .footer-content ul {
          list-style: none;
          padding: 0;
        }

        .footer-content ul li {
          margin-bottom: 10px;
        }

        .footer-content a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-content a:hover {
          color: var(--primary-color);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid var(--gray-color);
          font-size: 0.9rem;
          color: #aaa;
        }

        @media (max-width: 768px) {
          .footer-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
}
