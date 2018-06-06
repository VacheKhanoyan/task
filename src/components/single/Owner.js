import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleCar } from '../../actions/cars';

class Owner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      some: '',
    };
  }
  componentDidMount() {
    this.props.getSingleCar(this.props.id);
  }
  render() {
    const data = this.props.cars;
    const name = `${data.firstname} ${data.lastname}`;
    const timestamp = Date.parse(data.crated);
    const date = new Date(timestamp);
    const formattedDate = `${(`0${date.getDate()}`).slice(-2)}/${(`0${date.getMonth() + 1}`).slice(-2)}/${date.getFullYear()} ${(`0${date.getHours()}`).slice(-2)}:${(`0${date.getMinutes()}`).slice(-2)}`;

    return (
      <div className="right_side">
        <div className="owner">
          <h3>Owner Details</h3>
          <div className="clearAfter" />
          <ul className="list_info user_info">
            <li><span className="list_left"> Name</span> <span className="list_right">{name}</span></li>
            <li><span className="list_left"> Post Date</span> <span className="list_right">{formattedDate}</span></li>
            <li><span className="list_left"> E-mail</span> <span className="list_right">{data.email}</span></li>
            <li><span className="list_left"> Tel</span> <span className="list_right">{data.phoneNumber}</span></li>
            <li><span className="list_left"> Website</span> <span className="list_right"><a href="#/">www.website.com</a></span></li>
          </ul>
          <div className="mob_txtC clearAfter">
            <span className="soc_span">Share With:</span>
            <ul className="list_line soc">
              <li><a className="soc-twitter" href="#" /></li>
              <li><a className="soc-facebook" href="#" /></li>
              <li><a className="soc-google" href="#" /></li>
              <li><a className="soc-youtube soc-icon-last" href="#" /></li>
            </ul>
          </div>
          <div className="txt_right inline-popups"><a href="#form-availability" className="submit width100">Check Availability</a></div>

          <div id="form-availability" style={{ display: 'none' }} className="modal-content mfp-with-anim mfp-hide">
            <div className="modal-body">
              <h3 className="white">Check Availability</h3>
              <div className="form_area">
                <div>
                  <input type="text" placeholder="First name" />
                </div>
                <div>
                  <input type="text" placeholder="Last name" />
                </div>
                <div>
                  <input type="text" placeholder="Email address" />
                </div>
                <div>
                  <input type="text" placeholder="Phone number" />
                </div>
                <div>
                  <input type="text" placeholder="ZIP code" />
                </div>
                <div>
                  <textarea placeholder="Comments" />
                </div>
                <div className="clearAfter">
                  <div className="left inline-popups">
                    <a href="#form-login" className="line_height42">Sign In</a>
                  </div>
                  <div className="right">
                    <input type="submit" className="submit" value="Check Availability" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}
export default connect(mapStateToProps, { getSingleCar })(Owner);
