import axios from 'axios';

export const ADD_CAR = 'ADD_CAR';

export function postCar(data, callback1) {
  const request = axios
    .post('http://localhost:3000/addCars', data)
    .then(() => callback1());

  return (dispatch) => {
    request.then(({ elem }) => {
      dispatch({
        type: ADD_CAR,
        payload: elem,
      });
    });
  };
}
