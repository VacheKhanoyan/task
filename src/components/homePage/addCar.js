import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
/* eslint-disable */

class AddCar extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
  console.log("ewerw",this.props)
 
 
    return(
  <div>
    <section>
      <div className="add_post">
        <video
          width="1800"
          id="video-background"
          height="700"
          muted
          autoPlay="true"
          loop
          preload="auto"
        >
          <source src="style/video/video6.mp4" type="video/mp4" />
          <source src="stylevideo/video6.webm" type="video/webm" />
          <source src="stylevideo/video6.ogv" type="video/ogg" />
        </video>
        <div className="container">
          <h1>Hassle-Free Ways to Sell My Car</h1>
          <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                molestias officia laudantium vitae. Error illo ad voluptatum
                soluta perferendis consequatur voluptate autem necessitatibus
                maiores aspernatur? Tenetur aliquam, minus repudiandae suscipit.
          </p>
         
          <Link to={`/addCar`}>
          <input type="submit" value="Add cars"  />
          </Link >
        </div>
      </div>
    </section>
  </div>
    )
  }
};
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(AddCar);
