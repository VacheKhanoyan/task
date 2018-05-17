import React from "react";
import Slider from "react-slick";
import slide1 from "./../../img/slide1.jpg";
import slide3 from "./../../img/slide3.jpg";
import slide5 from "./../../img/slide5.jpg";

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div
            className="clickall slide slick-slide slick-cloned"
            rel="rel2"
            data-slick-index="0"
            ariahiden="true"
            tabIndex="-1"
            style={{ width: "1291px" }}
          >
            <div className="immagine" style={{ position: "relative" }}>
              <img
                src={slide1}
                alt="slide1"
                style={{
                  position: "absolute",
                  height: "754px",
                  width: "100%",
                  maxWidth: "100%",
                  top: "-77px",
                  left: "0px"
                }}
              />
            </div>
          </div>
          <div
            className="clickall slide slick-slide slick-current slick-active"
            rel="rel1"
            data-slick-index="0"
            ariahidden="false"
            tabIndex="-1"
            role="option"
            aria-selected="false"
            aria-describedby="slick-slide10"
            style={{ width: "1291px" }}
          >
            <div className="immagine" style={{ position: "relative" }}>
              <img
                src={slide3}
                alt="slide3"
                style={{
                  position: "absolute",
                  height: "807px",
                  width: "100%",
                  maxWidth: "100%",
                  top: "-103.5px",
                  left: "0px"
                }}
              />
            </div>
          </div>
          <div
            className="clickall slide slick-slide"
            rel="rel2"
            data-slick-index="1"
            ariahidden="true"
            tabIndex="-1"
            role="option"
            aria-selected="false"
            aria-describedby="slick-slide11"
            style={{ width: "1291px" }}
          >
            <div className="immagine" style={{ position: "relative" }}>
              <img
                src={slide5}
                alt="slide5"
                style={{
                  position: "absolute",
                  height: "727px",
                  width: "100%",
                  maxWidth: "100%",
                  top: "-63.5px",
                  left: "0px"
                }}
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;
