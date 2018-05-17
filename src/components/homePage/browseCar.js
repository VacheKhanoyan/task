import React, { Component } from "react";
import BrowseSlider from "./browseSlider";

class BrowseCar extends Component {
  render() {
    return (
      <section style={{ backgroundColor: "white" }}>
        <h1>Browse New Models</h1>
        <p className="sect_info">
          Our expert reviewers report back with the latest
        </p>
        <div className="blog_slider home_browse slick-initialized slick-slider">
          <div aria-live="polite" className="slick-list draggable">
            <div
              className="slick-track"
              role="listbox"
              style={{
                opacity: 1,
                width: "5264px",
                transition: "translate3d('-1504px', '0px', '0px')"
              }}
            />
          </div>
          <BrowseSlider />
        </div>
      </section>
    );
  }
}

export default BrowseCar;
