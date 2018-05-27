import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 40.200788,
        lng: 44.532005,
      },
      zoom: 17,
    };
  }
  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent text="CarSite" />
        </GoogleMapReact>
      </div>
    );
  }
}

AnyReactComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Map;
