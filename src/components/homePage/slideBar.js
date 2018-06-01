import React from 'react';
import SimpleSlider from './slider';
import SignIn from './../signupPage/signin';

class SlideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginShow: false,

    };
    // this.logShow = this.logShow.bind(this);
  }
  logSuccess=() => {
    this.setState({ loginShow: !this.state.loginShow });
  }
  // logShow() {
  //   this.setState({ loginShow: !this.state.loginShow });
  // }
  // close() {
  //   this.props.close();
  // }
  // update1() {
  //   this.props.update();
  // }
  render() {
    localStorage.setItem('logged', this.state.loginShow);
    return (

      <div>

        {this.props.loginShow && <SignIn show={this.props.show} logSuccess={this.logSuccess} />}
        <section className="padd_0 posRel">
          <div className="header_slider">
            <div className="cars_slider clearAfter">
              <div className="sezione banner slider slick-initialized slick-slider">
                <div arialive="polite" className="slick-list draggable">
                  <div className="hidden" />
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
  }
}

export default SlideBar;
