import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleCar } from '../../actions/cars';
import CarSlider from './Slider';


class CenterSlide extends Component {
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
    return (
      <div className="clearAfter">
        <div className="center_side">
          <div className="single_title clearAfter">
            <div className="single_title clearAfter">
              <div className="left">
                <h2 className="title">{data.mark}</h2>
                <p className="map_car"><i className="fa fa-map-marker" /> United Kingdom,London </p>
              </div>
              <div className="right">
                <p><span className="price">$97.500</span></p>
              </div>
              <div className="clearAfter" />
              <div className="top_description clearAfter">
                <ul className="clearAfter">
                  <li><p>Year</p><span>{data.year}</span></li>
                  <li><p>Miles</p><span>{data.milage}</span></li>
                  <li><p>Color</p><span>{data.color}</span></li>
                  <li><p>Condition</p><span>New</span></li>
                  <li><p>Fuel Type</p><span>{data.fuel}</span></li>
                  <li><p>Transmission</p><span>{data.transmission}</span></li>
                  <li><p>Drive</p><span>{data.driveType}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div >
          <CarSlider />

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
export default connect(mapStateToProps, { getSingleCar })(CenterSlide);
