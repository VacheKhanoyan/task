import React, { Component } from 'react';
import Slider from 'react-slick';

class CarSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <div className="slide_single">
          <div className="slider_img heighSmall1_95 slick-initialized slick-slider">
            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
              speed={1000}
            >
              <div className="">
                <a href="img/single1.jpg" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="style/img/single1.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
              <div className="">
                <a href="img/single2.jpg" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="style/img/single2.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
              <div className="">
                <a href="img/single3.jpg" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="style/img/single3.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
              <div className="">
                <a href="img/single4.jpg" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="style/img/single4.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
              <div className="">
                <a href="img/single5.jpg" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="style/img/single5.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
              <div className="">
                <a href="img/banner3.jpg" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="style/img/banner3.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
            </Slider>
          </div>
          <div className="slider-nav slick-initialized slick-slider">
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={5}
              swipeToSlide
              focusOnSelect
              autoplay
              speed={3000}


            >
              <div className="immagine">
                <img
                  alt=""
                  src="style/img/single1.jpg"
                  style={{
                        position: 'relative',
                        height: '114px',
                        width: '151px',
                        maxWidth: '151px',
                        top: '-7px',
                        left: '0px',
                        }}
                />
              </div>
              <div className="immagine slick-active" >
                <img
                  alt=""
                  src="style/img/single2.jpg"
                  style={{
                        position: 'relative',
                        height: '114px',
                        width: '151px',
                        maxWidth: '151px',
                        top: '-7px',
                        left: '0px',
                        }}
                />
              </div>
              <div className="immagine" >
                <img
                  alt=""
                  src="style/img/single3.jpg"
                  style={{
                        position: 'relative',
                        height: '114px',
                        width: '151px',
                        maxWidth: '151px',
                        top: '-7px',
                        left: '0px',
                        }}
                />
              </div>
              <div className="immagine" >
                <img
                  alt=""
                  src="style/img/single4.jpg"
                  style={{
                        position: 'relative',
                        height: '114px',
                        width: '151px',
                        maxWidth: '151px',
                        top: '-7px',
                        left: '0px',
                        }}
                />
              </div>
              <div className="immagine" >
                <img
                  alt=""
                  src="style/img/single5.jpg"
                  style={{
                        position: 'relative',
                        height: '114px',
                        width: '151px',
                        maxWidth: '151px',
                        top: '-7px',
                        left: '0px',
                        }}
                />
              </div>
              <div className="immagine" >
                <img
                  alt=""
                  src=" style/img/banner3.jpg"
                  style={{
                        position: 'relative',
                        height: '114px',
                        width: '151px',
                        maxWidth: '151px',
                        top: '-7px',
                        left: '0px',
                        }}
                />
              </div>
            </Slider>
          </div>
        </div>

      </div>

    );
  }
}

export default CarSlider;

