import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer_sections clearAfter">
            <div>
              <h2>Our Company</h2>
              <ul>
                <li>
                  <a href="#">Site Map</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Mobile Site</a>
                </li>
                <li>
                  <a href="#">For Car Dealers</a>
                </li>
                <li>
                  <a href="#">Fraud Awareness</a>
                </li>
                <li>
                  <a href="#">Reprints & Permissions</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Our Partners</h2>
              <ul>
                <li>
                  <a href="#">Auto.com</a>
                </li>
                <li>
                  <a href="#">NewCars.com</a>
                </li>
                <li>
                  <a href="#">RepairPal.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Stay Connected</h2>
              <ul className="soc">
                <li>
                  <a className="soc-twitter" href="#">
                    {" "}
                  </a>
                </li>
                <li>
                  <a className="soc-facebook" href="#">
                    {" "}
                  </a>
                </li>
                <li>
                  <a className="soc-google" href="#">
                    {" "}
                  </a>
                </li>
                <li>
                  <a className="soc-youtube soc-icon-last" href="#">
                    {" "}
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
  }
}

export default Footer;
