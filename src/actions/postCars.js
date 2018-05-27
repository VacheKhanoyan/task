import axios from 'axios';

export const ADD_CAR = 'ADD_CAR';

export function postCar(data, callback) {
  const request = axios
    .post('http://localhost:3000/addCars', data)
    .then(() => callback());

  return (dispatch) => {
    console.log('Vay qu ara');
    request.then(({ elem }) => {
      dispatch({
        type: ADD_CAR,
        payload: elem,
      });
    });
  };
}
