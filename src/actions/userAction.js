
import axios from 'axios';

export const USER_SIGNUP = 'USER_SIGNUP';
export const GET_USER = 'GET_USER';
export const LOGGED_IN = 'LOGGED_IN';

export function postUser(data, callback1, callback2) {
  const request = axios
    .post('http://localhost:3000/user', data)
    .then(() => callback1())
    .then(setTimeout(callback2, 1000));
  return dispatch => request.then((res) => {
    dispatch({
      type: USER_SIGNUP,
      payload: res,
    });
  });
}


export function getUser(data) {
  const request = axios.get(`http://localhost:3000/user?email=${data.email}${data.password ? `&password=${data.password}` : ''}`);

  return dispatch => request.then(res => dispatch({
    type: GET_USER,
    payload: res.data,
  }));
}

export function loggedIn(data) {
  console.log('action:', data);
  return dispatch => dispatch({
    type: LOGGED_IN,
    payload: data,
  });
}
