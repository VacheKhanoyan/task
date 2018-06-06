import axios from 'axios';

export const ADD_CAR_IMAGE = 'ADD_CAR_IMAGE';

export function postImage(data) {
  const request = axios
    .post('http://localhost:4000/image', data);
  return dispatch => request.then(res => dispatch({
    type: ADD_CAR_IMAGE,
    payload: res.data,
  }));
}
