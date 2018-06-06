import axios from 'axios';

export const ADD_CAR = 'ADD_CAR';
export const POST_NOTIFY = 'POST_NOTYFY';

export function postCar(data) {
  const res = axios
    .post('http://localhost:3000/addCars', data);
  return dispatch => res.then(elem => dispatch({
    type: ADD_CAR,
    payload: elem.data,
  }));
}


export function postCarNotify(data) {
  console.log('action:', data);
  return dispatch => dispatch({
    type: POST_NOTIFY,
    payload: data,
  });
}
