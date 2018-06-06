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
            <button className="favorites_btn"><i className="fa fa-heart-o" /></button>
            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
              speed={1000}
            >
              <div className="">
                <a href="#/" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="/style/img/single1.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
              <div className="">
                <a href="#/" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="/style/img/single2.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
              <div className="">
                <a href="#/" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="/style/img/single3.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
              <div className="">
                <a href="#/" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="/style/img/single4.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
              <div className="">
                <a href="#/" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="/style/img/single5.jpg" style={{ height: '100%', width: '100%' }} />
                  </div>
                  <div className="zoom_btn">
                    <i className="fa fa-search" />
                  </div>
                </a>
              </div>
              <div className="">
                <a href="#/" className="image-popup-no-margins">
                  <div className="immagine">
                    <img alt="" src="/style/img/banner3.jpg" style={{ height: '100%', width: '100%' }} />
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
                  src="/style/img/single1.jpg"
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
                  src="/style/img/single2.jpg"
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
                  src="/style/img/single3.jpg"
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
                  src="/style/img/single4.jpg"
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
                  src="/style/img/single5.jpg"
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
                  src="/style/img/banner3.jpg"
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

/* <div class="slider-nav slick-initialized slick-slider">
<div class="prev-arrow slideshow-arrow single_arrowP slick-arrow" style="display: block;">
</div>
 <div aria-live="polite" class="slick-list draggable">
<div class="slick-track" role="listbox" style="opacity: 1; width: 2790px; transform: translate3d(-1395px, 0px, 0px);">
<div class="immagine slick-slide slick-cloned" data-slick-index="-6" aria-hidden="true" tabindex="-1" style="width: 151px; position: relative;">
<img src="img/single1.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;">
</div>
<div class="immagine slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" tabindex="-1" style="width: 151px; position: relative;">
<img src="img/single2.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;">
</div>
<div class="immagine slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabindex="-1" style="width: 151px; position: relative;">
<img src="img/single3.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;">
</div>
<div class="immagine slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabindex="-1" style="width: 151px; position: relative;">
<img src="img/single4.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;">
</div>
<div class="immagine slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabindex="-1" style="width: 151px; position: relative;">
<img src="img/single5.jpg" style="position: absolute; height: 100px; width: 169px; max-width: 169px; top: 0px; left: -9px;">
</div>
<div class="immagine slick-slide slick-cloned slick-center" data-slick-index="-1" aria-hidden="true" tabindex="-1" style="width: 151px; position: relative;">
<img src="img/banner3.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;">
</div>
<div class="immagine slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide10" style="width: 151px; position: relative;">
<img src="img/single1.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;">
</div>
<div class="immagine slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide11" style="width: 151px; position: relative;"><img src="img/single2.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;"></div><div class="immagine slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide12" style="width: 151px; position: relative;">
<img src="img/single3.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;"></div><div class="immagine slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabindex="0" role="option" aria-describedby="slick-slide13" style="width: 151px; position: relative;"><img src="img/single4.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;"></div><div class="immagine slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabindex="0" role="option" aria-describedby="slick-slide14" style="width: 151px; position: relative;"><img src="img/single5.jpg" style="position: absolute; height: 100px; width: 169px; max-width: 169px; top: 0px; left: -9px;"></div><div class="immagine slick-slide slick-current slick-active slick-center" data-slick-index="5" aria-hidden="false" tabindex="0" role="option" aria-describedby="slick-slide15" style="width: 151px; position: relative;"><img src="img/banner3.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;"></div><div class="immagine slick-slide slick-cloned slick-active" data-slick-index="6" aria-hidden="false" tabindex="0" style="width: 151px; position: relative;"><img src="img/single1.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;"></div><div class="immagine slick-slide slick-cloned slick-active" data-slick-index="7" aria-hidden="false" tabindex="0" style="width: 151px; position: relative;"><img src="img/single2.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;"></div><div class="immagine slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabindex="-1" style="width: 151px; position: relative;"><img src="img/single3.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;"></div><div class="immagine slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabindex="-1" style="width: 151px; position: relative;"><img src="img/single4.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;"></div><div class="immagine slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" tabindex="-1" style="width: 151px; position: relative;">
<img src="img/single5.jpg" style="position: absolute; height: 100px; width: 169px; max-width: 169px; top: 0px; left: -9px;"></div><div class="immagine slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" tabindex="-1" style="width: 151px; position: relative;"><img src="img/banner3.jpg" style="position: absolute; height: 114px; width: 151px; max-width: 151px; top: -7px; left: 0px;"></div></div></div>


                            <div class="next-arrow slideshow-arrow single_arrowN slick-arrow" style="display: block;"></div></div> */
