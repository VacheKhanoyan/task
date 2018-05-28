import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'react-select/dist/react-select.css';
import getAllCars from './../../actions/cars';


class CarInfo extends Component {
  componentDidMount() {
    this.props.getAllCars();
  }
  render() {
    const { data } = this.props;
    return (
      <fieldset>
        <legend align="center">Enter Basic Vehicle Info</legend>
        <div className="threeRows p10 clearAfter">
          <div className="rows" >
            <span >Select mark </span>
            <Select
              name="mark"
              clearable={false}
              placeholder="select car model"
              style={{
borderRadius: '0px', height: '43px', color: 'red', marginTop: '10px',
}}
              value={data.mark}
              onChange={this.props.handleChange}
              options={this.props.marksList()}
            />
          </div>
          <div className="rows" >
            <span>Select model </span>
            <Select
              name="model"
              placeholder="select car model"
              disabled={!data.mark}
              style={{
borderRadius: '0px', height: '43px', color: 'red', marginTop: '10px',
}}
              value={data.model}
              onChange={this.props.handleChange}
              options={this.props.modelsList()}
            />
          </div>
          <div className="rows">
            <span >Select year </span>
            <div style={{ marginTop: '10px' }}>
              <Select
                name="year"
                placeholder="select car year"
                value={data.year}
                style={{
borderRadius: '0px', height: '43px', color: 'red', marginTop: '10px',
}}
                onChange={this.props.handleChange}
                options={this.props.stylesList('year')}
              />
            </div>
          </div>
          <div className="rows">
            <span >Select style </span>
            <Select
              name="form-field-name"
              placeholder="select car style"
              value={data.style}
              style={{
borderRadius: '0px', height: '43px', color: 'red', marginTop: '10px',
}}
              onChange={this.props.handleChange}
              options={this.props.stylesList('style')}
            />
          </div>
          <div className="rows">
            <span>Enter Vin</span>
            <input
              type="text"
              style={{ textAlign: 'left' }}
              placeholder="enter vin code"
              name="vinCode"
              value={data.vinCode}
              onChange={this.props.handleInput}
            />
          </div>
          <div className="rows">
            <span>Enter Mileage</span>
            <input
              type="text"
              placeholder="enter mileage"
              name="milage"
              value={data.milage}
              onChange={this.props.handleInput}
            />
          </div>
          <div className="rows">
            <span >Select color </span>
            <Select
              name="color"
              placeholder="select car color"
              value={data.color}
              style={{
borderRadius: '0px', height: '43px', color: 'red', marginTop: '10px',
}}
              onChange={this.props.handleChange}
              options={this.props.stylesList('color')}
            />
          </div>
          <div className="rows">
            <span >Transmission </span>
            <Select
              name="transmission"
              placeholder="select transmission"
              value={data.transmission}
              style={{
borderRadius: '0px', height: '43px', color: 'red', marginTop: '10px',
}}
              onChange={this.props.handleChange}
              options={this.props.stylesList('transmission')}
            />
          </div>
          <div className="rows">
            <span >Drive Type </span>
            <Select
              name="driveType"
              placeholder="select drive type"
              value={data.driveType}
              style={{
borderRadius: '0px', height: '43px', color: 'red', marginTop: '10px',
}}
              onChange={this.props.handleChange}
              options={this.props.stylesList('driveType')}
            />
          </div>
          <div className="rows">
            <span >Number of Doors </span>
            <Select
              name="doors"
              placeholder="select number of doors"
              value={data.doors}
              style={{
borderRadius: '0px', height: '43px', color: 'red', marginTop: '10px',
}}
              onChange={this.props.handleChange}
              options={this.props.stylesList('doors')}
            />
          </div>
          <div className="rows">
            <span >Engine Cylinder </span>
            <Select
              name="cylinder"
              placeholder="select engine cylinder"
              value={data.cylinder}
              style={{
borderRadius: '0px', height: '43px', color: 'red', marginTop: '10px',
}}
              onChange={this.props.handleChange}
              options={this.props.stylesList('cylinder')}
            />
          </div>
          <div className="rows">
            <span >Fuel Type </span>
            <Select
              name="fuel"
              placeholder="select fuel type"
              value={data.fuel}
              style={{
borderRadius: '0px', height: '43px', color: 'red', marginTop: '10px',
}}
              onChange={this.props.handleChange}
              options={this.props.stylesList('fuel')}
            />
          </div>
        </div>
      </fieldset>
    );
  }
}

CarInfo.propTypes = {
  getAllCars: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  marksList: PropTypes.func.isRequired,
  modelsList: PropTypes.func.isRequired,
  stylesList: PropTypes.func.isRequired,
  data: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,

};

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

export default connect(mapStateToProps, { getAllCars })(CarInfo);
