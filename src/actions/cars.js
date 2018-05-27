import axios from 'axios';

// const ax = axios.create({
//   baseURL: 'http://localhost:3000/data',
// });
export const GET_ALL_CARS = 'GET_ALL_CARS';

export default function getAllCars() {
  const request = axios.get('http://localhost:3001/CarsList.json');
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({
        type: GET_ALL_CARS,
        payload: data,
      });
    });
  };
}
