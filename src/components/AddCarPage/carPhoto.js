import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import 'react-select/dist/react-select.css';
/* eslint-disable */
const CarPhoto = props => (
  <fieldset>
    <legend align="center">Add Photos of Your Car</legend>
    <div className="img_upload" >
      <input id="uploadFile" placeholder="Choose File" disabled="disabled" />
      <div className="fileUpload btn btn_primary">
        <span>Upload</span>
        <input id="uploadBtn" type="file" className="upload" onChange={props.upload}/>
      </div>
      <div className="clear" />
      <p>Select the main Image</p>
      <ul>
        <li>
          <label htmlFor="photo">
            <img src="style/img/add_images/1 (1).jpg" alt="" />
            <input type="radio" name="add_img" checked="" value="add" />
            <div className="main_photo">
                          Main Photo
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="photo">
            <img src="style/img/add_images/1 (2).jpg" alt="" />
            <input type="radio" name="add_img" value="add" />
            <div className="main_photo">
                          Main Photo
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="photo">
            <img src="style/img/add_images/1 (3).jpg" alt="" />
            <input type="radio" name="add_img" value="add" />
            <div className="main_photo">
                          Main Photo
            </div>
          </label >
        </li>
        <li>
          <label htmlFor="photo">
            <img src="style/img/add_images/1 (4).jpg" alt="" />
            <input type="radio" name="add_img" value="add" />
            <div className="main_photo">
                          Main Photo
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="photo">
            <img src="style/img/add_images/1 (5).jpg" alt="" />
            <input type="radio" name="add_img" value="add" />
            <div className="main_photo">
                          Main Photo
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="photo">
            <img src="style/img/add_images/1 (6).jpg" alt="" />
            <input type="radio" name="add_img" value="add" />
            <div className="main_photo">
                          Main Photo
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="photo">
            <img src="style/img/add_images/1 (7).jpg" alt="" />
            <input type="radio" name="add_img" value="add" />
            <div className="main_photo">
                          Main Photo
            </div>
          </label>
        </li>
        <li>
          <label htmlFor="photo">
            <img src="style/img/add_images/1 (8).jpg" alt="" />
            <input type="radio" name="add_img" value="add" />
            <div className="main_photo">
                          Main Photo
            </div>
          </label>
        </li>
      </ul>
    </div>
    <div className="add_btn">

      <Link to="/" >
        <input type="button" onClick={props.onClick} value="Add car" />
      </Link>

    </div>
  </fieldset>
);
CarPhoto.propTypes = {
  onClick: PropTypes.func.isRequired,

};

export default CarPhoto;
