import axios from 'axios';

export const FETCH_NEW_CARS = 'FETCH_NEW_CARS';

export default function getNewCar() {
  const request = axios.get('http://localhost:3000/newCars');
  return dispatch => request.then(({ data }) => {
    dispatch({
      type: FETCH_NEW_CARS,
      payload: data,
    });
  });
}
