import axios from 'axios';

export const USER_SIGNUP = 'USER_SIGNUP';
export const GET_USER = 'GET_USER';

export function postUser(data, callback1, callback2) {
  const request = axios
    .post('http://localhost:3000/user', data)
    .then(() => callback1())
    .then(setTimeout(callback2, 1000));
  return (dispatch) => {
    request.then(({ elem }) => {
      dispatch({
        type: USER_SIGNUP,
        payload: elem,
      });
    });
  };
}

export function getUser(email, password = '') {
  const request = axios.get(`http://localhost:3000/user?email=${email}${password ? `&password=${password}` : ''}`);
  return dispatch => request.then(({ data }) => {
    dispatch({
      type: GET_USER,
      payload: data,
    });
  });
}
