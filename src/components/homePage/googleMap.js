import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 40.200788,
      lng: 44.532005
    },
    zoom: 17
  };

  render() {
    return (
      <div style={{ height: "37.3vh", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
