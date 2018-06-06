import React, { Component } from 'react';
import { connect } from 'react-redux';
import CenterSlide from './centerSlide';
import Owner from './Owner';
import Description from './Description';
import { getSingleCar } from '../../actions/cars';


class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    };
  }
  render() {
    return (
      <div style={{ padding: '70px' }}>
        <section className="single" >
          <div className="container clearAfter">
            <Owner id={this.state.id} />
            <CenterSlide id={this.state.id} />
            <Description id={this.state.id} />
          </div>
        </section>
      </div>
    );
  }
}

export default Single;
