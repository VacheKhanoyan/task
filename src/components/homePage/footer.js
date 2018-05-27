import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer_sections clearAfter">
        <div>
          <h2>Our Company</h2>
          <ul>
            <li>
              <a href="#to">Site Map</a>
            </li>
            <li>
              <a href="#to">Careers</a>
            </li>
            <li>
              <a href="#to">Mobile Site</a>
            </li>
            <li>
              <a href="#to">For Car Dealers</a>
            </li>
            <li>
              <a href="#to">Fraud Awareness</a>
            </li>
            <li>
              <a href="#to">Reprints & Permissions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Our Partners</h2>
          <ul>
            <li>
              <a href="#to">Auto.com</a>
            </li>
            <li>
              <a href="#to">NewCars.com</a>
            </li>
            <li>
              <a href="#to">RepairPal.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Stay Connected</h2>
          <ul className="soc">
            <li>
              <a className="soc-twitter" href="#to">
                {' '}
              </a>
            </li>
            <li>
              <a className="soc-facebook" href="#to">
                {' '}
              </a>
            </li>
            <li>
              <a className="soc-google" href="#to">
                {' '}
              </a>
            </li>
            <li>
              <a className="soc-youtube soc-icon-last" href="#to">
                {' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>© 2016 st-dev.com All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
