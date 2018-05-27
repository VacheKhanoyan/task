import React from 'react';
import SimpleSlider from './slider';

const SlideBar = () => (
  <div>
    <section className="padd_0 posRel">
      <div className="header_slider">
        <div className="cars_slider clearAfter">
          <div className="sezione banner slider slick-initialized slick-slider">
            <div arialive="polite" className="slick-list draggable">
              <SimpleSlider />
              <div className="header_caption">
                <h1>Browse New Models</h1>
                <span>
                  Start with a must-have and discover matches along the way
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SlideBar;
