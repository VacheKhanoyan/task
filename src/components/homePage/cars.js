// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import getAllCars from './../../actions/cars';

// class Cars extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menuSelect: '',
//     };
//   }
//   componentDidMount() {
//     this.props.getAllCars();
//   }

//   render() {
//     const cars = this.props.cars;
//     const current = Object.values(cars);
//     const mycar = current.map(data => data.filter(word => word.brand === 'Seat'));

//     return (
//       <div>
//         hello cars
//       </div>
//     );
//   }
// }


// function mapStateToProps(state) {
//   return {
//     cars: state.cars,
//   };
// }

// export default connect(mapStateToProps, { getAllCars })(Cars);

