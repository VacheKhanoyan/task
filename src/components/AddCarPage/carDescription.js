import React from 'react';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';

const CarDescription = (props) => {
  const { data } = props;
  return (
    <fieldset>
      <legend align="center">Write a Description</legend>
      <div className="short_message">
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          value={data.description}
          onChange={props.handleInput}
          placeholder="Write something about your car"
        />
      </div>
    </fieldset>

  );
};

CarDescription.propTypes = {
  handleInput: PropTypes.func.isRequired,
  data: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
};

export default CarDescription;

