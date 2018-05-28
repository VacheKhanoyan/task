import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';
// import { ToastContainer, toast } from 'react-toastify';
import { Base64 } from 'js-base64';
import 'react-select/dist/react-select.css';
import { addCarData } from './../util';
import { signUpValidate } from './../validate';
import getAllCars from './../../actions/cars';
import { postCar } from '../../actions/postCars';
import CarInfo from './carInfo';
import CarFeauters from './carFeauters';
import ContactInfo from './contactInfo';
import CarDescription from './carDescription';
import CarPhoto from './carPhoto';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: addCarData,
      errors: {},
      image: '',
      notify: false,
      success: false,
    };
    this.marksList = this.marksList.bind(this);
    this.modelsList = this.modelsList.bind(this);
    this.stylesList = this.stylesList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCeckbox = this.handleCeckbox.bind(this);
    this.onClick = this.onClick.bind(this);
    this.upload = this.upload.bind(this);
  }
  componentDidMount() {
    this.props.getAllCars();
  }
  onClick() {
    const errors = signUpValidate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      postCar(
        this.state.data,
        () => this.setState({ notify: !this.state.notify, success: !this.state.success }),
      );
    }
  }
  //   notifys = () => {
  //     toast.success('Success Notification !', {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   }
  upload=(e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      return reader.result;
    };
    reader.readAsDataURL(image);
    this.setState({ image: reader.result });
  }
    handleChange = (e) => {
      this.setState({
        ...this.state,
        data: { ...this.state.data, [e.name]: e.value },
      });
    }
    handleInput = (e) => {
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          [e.target.name]: e.target.value,
        },
      });
    }
    handleCeckbox = (e) => {
    //   console.log(e.target.dataset.id);
    //   console.log(id);
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          [e.target.name]: {
            ...this.state.data[e.target.name],
            [e.target.dataset.id]: e.target.value,
          },
        },
      });
    }

    marksList() {
      const marks = [];
      map(this.props.cars.CarsList, 'brand')
        .map(elem => marks.push({ value: elem, label: elem, name: 'mark' }));
      return marks;
    }
    modelsList() {
      const current = map(this.props.cars.CarsList, data => data);
      const models = [];
      const mycar = current.filter(word => word.brand === this.state.data.mark);
      map(mycar, 'models');
      mycar.map(data => data.models.map(elem => models.push({ value: elem, label: elem, name: 'model' })));
      return models;
    }
    stylesList(arg) {
      const arr = [];
      map(this.props.cars[arg], elem => arr.push({ value: elem, label: elem, name: arg }));
      return arr;
    }
    render() {
      // console.log('dsada', this.state.data.comfort);
      console.log('dsda', this.state.image);
      return (
        <div>
          <div className="container">
            <div className="add_form">
              <h1>Add Cars for Sale</h1>
              <form action="">

                <CarInfo
                  data={this.state.data}
                  handleChange={this.handleChange}
                  handleInput={this.handleInput}
                  stylesList={this.stylesList}
                  marksList={this.marksList}
                  modelsList={this.modelsList}

                />
                <CarFeauters
                  handleCeckbox={this.handleCeckbox}
                  data={this.state.data}
                />
                <ContactInfo
                  data={this.state.data}
                  errors={this.state.errors}
                  handleInput={this.handleInput}
                />
                <CarDescription
                  data={this.state.data}
                  handleInput={this.handleInput}
                />
                <CarPhoto
                  onClick={this.onClick}
                  upload={this.upload}
                  success={this.state.success}
                />

              </form>
            </div>
          </div>
        </div>
      );
    }
}


Container.propTypes = {
  getAllCars: PropTypes.func.isRequired,
  cars: PropTypes.shape({
    CarsList: PropTypes.array,
  }).isRequired,
};
function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

export default connect(mapStateToProps, { getAllCars, postCar })(Container);

