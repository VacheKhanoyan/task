
import axios from 'axios';

export const USER_SIGNUP = 'USER_SIGNUP';
export const GET_USER = 'GET_USER';
export const LOGGED_IN = 'LOGGED_IN';
export const UPDATE_USER = 'UPDATE_USER';
export const NOTIFY = 'NOTIFY';

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
  const request = axios.get(`http://localhost:3000/user?${data.email ? `&email=${data.email}` : ''}${data.password ? `&password=${data.password}` : ''}${data.id ? `&id=${data.id}` : ''}`);
  return dispatch => request.then(res => dispatch({
    type: GET_USER,
    payload: res.data,
  }));
}
export function updateUser(id, data) {
  const request = axios.patch(`http://localhost:3000/user/${id}`, data);
  return dispatch => request.then(res => dispatch({
    type: UPDATE_USER,
    payload: res.data,
  }));
}

export function loggedIn(data) {
  return dispatch => dispatch({
    type: LOGGED_IN,
    payload: data,
  });
}
export function notify(data) {
  return dispatch => dispatch({
    type: NOTIFY,
    payload: data,
  });
}

