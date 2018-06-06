import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { getSingleCar } from '../../actions/cars';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'details_item',
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.getSingleCar(this.props.id);
  }
  toggle() {
    this.setState({ className: this.state.className === 'details_item' ? '' : 'details_item' });
  }
  render() {
    const data = this.props.cars;
    return (
      <div className="slide_single">
        <div className="right_info">
          <h3 className="title">Owner description</h3>
          <p className="car_text">{data.description}</p>
          <ul className="list_info">
            <li><span className="list_left">Year</span> <span className="list_right">{data.year}</span></li>
            <li><span className="list_left">Miles</span> <span className="list_right">{data.milage}</span></li>
            <li><span className="list_left">Drive</span> <span className="list_right">{data.driveType}</span></li>
            <li><span className="list_left">Transmission</span> <span className="list_right">{data.transmission}</span></li>
            <li><span className="list_left">Exterior</span> <span className="list_right">Black</span></li>
            <li><span className="list_left">Fuel Type</span> <span className="list_right">{data.fuel}</span></li>
            <li><span className="list_left">Condition</span> <span className="list_right">New</span></li>
            <li><span className="list_left">Style</span> <span className="list_right">Coupe</span></li>
            <li><span className="list_left">Doors</span> <span className="list_right">{data.doors}</span></li>
            <li><span className="list_left">Gear Type</span> <span className="list_right">Tiptronic</span></li>
          </ul>
          <div className="more_details add_form">
            <a href="#0" className="menu_toggle"onClick={this.toggle}>More Features</a>
            <div className={this.state.className} >
              <h2>Car Features</h2>
              <div className="threeRows toTwoRowsIn900 p10 clearAfter">
                <div className="rows">
                  <p>Comfort</p>
                  <ul className="check_style">
                    {
                        map(this.props.cars.comfort, (elem, i) => (
                          <li key={i}>
                            <p className="check_text"><i className="fa fa-check" />{elem}</p>
                          </li>
                        ))
                     }
                  </ul>
                  <p>Seats</p>
                  <ul className="check_style">
                    {
                        map(this.props.cars.seats, (elem, i) => (
                          <li key={i}>
                            <p className="check_text"><i className="fa fa-check" />{elem}</p>
                          </li>
                        ))
                     }
                  </ul>
                </div>
                <div className="rows">
                  <p>Safety</p>
                  <ul className="check_style">
                    <ul className="check_style">
                      {
                        map(this.props.cars.safety, (elem, i) => (
                          <li key={i}>
                            <p className="check_text"><i className="fa fa-check" />{elem}</p>
                          </li>
                        ))
                     }
                    </ul>
                  </ul>
                  <p>Windows</p>
                  <ul className="check_style">
                    {
                        map(this.props.cars.windows, (elem, i) => (
                          <li key={i}>
                            <p className="check_text"><i className="fa fa-check" />{elem}</p>
                          </li>
                        ))
                     }
                  </ul>
                </div>
                <div className="rows">
                  <p>Entertainment</p>
                  <ul className="check_style">
                    {
                        map(this.props.cars.entertainment, (elem, i) => (
                          <li key={i}>
                            <p className="check_text"><i className="fa fa-check" />{elem}</p>
                          </li>
                        ))
                     }
                  </ul>
                  <p>Other</p>
                  <ul className="check_style">
                    {
                        map(this.props.cars.other, (elem, i) => (
                          <li key={i}>
                            <p className="check_text"><i className="fa fa-check" />{elem}</p>
                          </li>
                        ))
                     }
                  </ul>
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
export default connect(mapStateToProps, { getSingleCar })(Description);

