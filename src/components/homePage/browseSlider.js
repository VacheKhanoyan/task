import React from "react";
import Slider from "react-slick";

class BrowseSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [
        "style/img/single1.jpg",
        "style/img/slide2.jpg",
        "style/img/slide4.jpg",
        "style/img/single4.jpg",
        "style/img/single3.jpg"
      ]
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.slider = this.slider.bind(this);
  }
  slider = () => {
    return this.state.image.map(url => {
      return (
        <div key={url}>
          <div className="blog_item ">
            <div className="immagine" style={{ position: "relative" }}>
              <img
                src={url}
                alt="single1"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "610px",
                  maxWidth: "100%",
                  top: "0px",
                  left: "px"
                }}
              />
            </div>
            <div className="car_info clearAfter">
              <p className="car_name">2016 Mercedes-Benz GLC-class</p>
              <p className="car_about">
                The subcompact SUV class has some nice interiors, and the CX-3
                is right up there.
              </p>
              <a href="#" className="more_btn" tabIndex="-1">
                See More
              </a>
            </div>
          </div>
        </div>
      );
    });
  };
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.slider()}
        </Slider>
        <div style={{ textAlign: "center" }} />
      </div>
    );
  }
}
export default BrowseSlider;
