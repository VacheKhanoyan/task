import axios from 'axios';

export const GET_ALL_CARS = 'GET_ALL_CARS';
export const GET_SINGLE_CAR = 'GET_SINGLE_CAR';

export function getAllCars() {
  const request = axios.get('http://localhost:3001/CarsList.json');
  return (dispatch) => {
    request.then(({ data }) => dispatch({
      type: GET_ALL_CARS,
      payload: data,
    }));
  };
}

export function getSingleCar(id) {
  const request = axios.get(`http://localhost:3000/addCars/${id}`);
  return (dispatch) => {
    request.then(({ data }) => dispatch({
      type: GET_SINGLE_CAR,
      payload: data,
    }));
  };
}
