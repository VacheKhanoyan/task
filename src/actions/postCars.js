import axios from 'axios';

export const ADD_CAR = 'ADD_CAR';
export const POST_NOTIFY = 'POST_NOTYFY';

export function postCar(data) {
  const res = axios
    .post('http://localhost:3000/addCars', data)
    .then(elem => localStorage.setItem('addCar_id', elem.data.id));


  return dispatch => dispatch({
    type: ADD_CAR,
    payload: res.data,
  });
}

export function postCarNotify(data) {
  console.log('action:', data);
  return dispatch => dispatch({
    type: POST_NOTIFY,
    payload: data,
  });
}
