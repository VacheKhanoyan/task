import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import 'react-select/dist/react-select.css';
import getAllCars from './../../actions/cars';

class CarFeauters extends Component {
  componentDidMount() {
    this.props.getAllCars();
  }
  render() {
    return (
      <fieldset>
        <legend align="center">Select Your Car`s Features</legend>
        <div className="threeRows p10 clearAfter">
          <div className="rows">
            <p>Comfort</p>

            <ul className="check_style">
              {
                          map(this.props.cars.comfort, (elem, i) => (
                            <li key={i}>
                              <label htmlFor={elem}>
                                <input
                                  type="checkbox"
                                  name="comfort"
                                  data-id={i}
                                  id={elem}
                                  value={elem}
                                  onChange={this.props.handleCeckbox}
                                />
                                <p className="check_text">{elem}</p>
                              </label>
                            </li>
                          ))
                                    }
            </ul>

            <p>Seats</p>

            <ul className="check_style">
              {
                          map(this.props.cars.seats, (elem, i) => (
                            <li key={i}>
                              <label htmlFor={elem}>
                                <input
                                  type="checkbox"
                                  name="seats"
                                  data-id={i}
                                  id={elem}
                                  value={elem}
                                  onChange={this.props.handleCeckbox}
                                />
                                <p className="check_text">{elem}</p>
                              </label >
                            </li>
                          ))
                                    }
            </ul>

          </div>
          <div className="rows">
            <p>Safety</p>

            <ul className="check_style">
              {
                          map(this.props.cars.safety, (elem, i) => (
                            <li key={i}>
                              <label htmlFor={elem} >
                                <input
                                  type="checkbox"
                                  name="safety"
                                  data-id={i}
                                  id={elem}
                                  value={elem}
                                  onChange={this.props.handleCeckbox}
                                />
                                <p className="check_text">{elem}</p>
                              </label>
                            </li>
                          ))
                                    }
            </ul>
            <p>Windows</p>
            <ul className="check_style">
              {
                          map(this.props.cars.windows, (elem, i) => (
                            <li key={i}>
                              <label htmlFor={elem} >
                                <input
                                  type="checkbox"
                                  name="windows"
                                  data-id={i}
                                  id={elem}
                                  value={elem}
                                  onChange={this.props.handleCeckbox}
                                />
                                <p className="check_text">{elem}</p>
                              </label>
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
                              <label htmlFor={elem}>
                                <input
                                  type="checkbox"
                                  name="entertainment"
                                  data-id={i}
                                  id={elem}
                                  value={elem}
                                  onChange={this.props.handleCeckbox}
                                />
                                <p className="check_text">{elem}</p>
                              </label>
                            </li>
                          ))
                                    }
            </ul>

            <p>Other</p>

            <ul className="check_style">
              {
                          map(this.props.cars.other, (elem, i) => (
                            <li key={i}>
                              <label htmlFor={elem}>
                                <input
                                  type="checkbox"
                                  name="other"
                                  data-id={i}
                                  id={elem}
                                  value={elem}
                                  onChange={this.props.handleCeckbox}
                                />
                                <p className="check_text">{elem}</p>
                              </label>
                            </li>
                          ))
                                    }
            </ul>
          </div>
        </div>
      </fieldset>
    );
  }
}

CarFeauters.propTypes = {
  getAllCars: PropTypes.func.isRequired,
  handleCeckbox: PropTypes.func.isRequired,
  cars: PropTypes.shape({
    comfort: PropTypes.array,
    seats: PropTypes.array,
    safety: PropTypes.array,
    windows: PropTypes.array,
    entertainment: PropTypes.array,
    other: PropTypes.array,
  }).isRequired,

};

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

export default connect(mapStateToProps, { getAllCars })(CarFeauters);
