import React, { Component } from "react";
import Map from "./googleMap";

class ContactPage extends Component {
  render() {
    return (
      <section className="contact_area" style={{ marginTop: "25px" }}>
        <div className="contact_bg">
          <div className="contact_form dark_bg">
            <h1>Key Contacts</h1>
            <p className="sect_info">
              Our expert reviewers report back with the latest
            </p>
            <ul className="keyContacts">
              <li>
                <span>Customer Service</span>
                <p>(555) 555-5555</p>
                <p>
                  <a href="mailto:someone@example.com" target="_top">
                    info@info.com
                  </a>
                </p>
              </li>
              <li>
                <span>Offices</span>
                <p>(555) 555-5555</p>
                <p>
                  <a href="mailto:someone@example.com" target="_top">
                    info@info.com
                  </a>
                </p>
              </li>
              <li>
                <span>National Advertising</span>
                <p>PR Department</p>
                <p>
                  <a href="mailto:someone@example.com" target="_top">
                    info@info.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="container clearAfter">
            <div className="contact_form">
              <h1>Contact us</h1>
              <p className="sect_info">
                If you have any question please contact us
              </p>
              <ul className="main_contact">
                <li>
                  <input type="text" placeholder="Your Name" />
                </li>
                <li>
                  <input type="text" placeholder="Your Last Name" />
                </li>
                <li>
                  <input type="email" placeholder="Your Email" />
                </li>
                <li>
                  <input type="text" placeholder="Subject Message" />
                </li>
                <li className="full_width">
                  <textarea placeholder="Your message..." />
                </li>
                <li>
                  <input type="submit" value="Send" className="submit" />
                </li>
              </ul>
              <div className="clear" />
            </div>
          </div>
        </div>
        <div className="map">
          <div id="map">
            <Map />
          </div>
        </div>
      </section>
    );
  }
}

export default ContactPage;
