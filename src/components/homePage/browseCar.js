import React, { Component } from 'react';
import BrowseSlider from './browseSlider';

class BrowseCar extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.child = React.createRef();
  }
  next() {
    this.child.current.next();
  }
  prev() {
    this.child.current.previous();
  }
  render() {
    return (
      <section style={{ backgroundColor: 'white' }}>
        <h1>Browse New Models</h1>
        <p className="sect_info">
          Our expert reviewers report back with the latest
        </p>
        <div className="blog_slider home_browse slick-initialized slick-slider">
          <button
            onClick={this.prev}
            className="prev-arrow slideshow-arrow single_arrowP slick-arrow"
            style={{ display: 'block' }}
          />
          <div aria-live="polite" className="slick-list draggable">
            <div
              className="slick-track"
              role="listbox"
              style={{
                opacity: 1,
                width: '5264px',
                transition: "translate3d('-1504px', '0px', '0px')",
              }}
            />
          </div>
          <BrowseSlider ref={this.child} />
          <button
            onClick={this.next}
            className="next-arrow slideshow-arrow single_arrowN slick-arrow"
            style={{ display: 'block' }}
          />
        </div>
      </section>
    );
  }
}

export default BrowseCar;
