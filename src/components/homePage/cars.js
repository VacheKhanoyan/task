import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getAllCars from './../../actions/cars';

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelect: '',
    };
  }
  componentDidMount() {
    this.props.getAllCars();
  }

  render() {
    const cars = this.props.cars;
    const current = Object.values(cars);
    const mycar = current.map(data => data.filter(word => word.brand === 'Seat'));
    console.log(mycar.map(data => data[0].models));
    return (
      <div>
        hello cars
      </div>
    );
  }
}
// yearsList() {
//     //       const year = this.props.cars;
//     //       const years=[]
//     //     //const current = Object.keys(year)
//     //    Object.values(year).map(data=> {
//     //         years.push({"value": data[1], "label": data })
//     //       })
//     //       console.log(years)
//     //   }

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

export default connect(mapStateToProps, { getAllCars })(Cars);


