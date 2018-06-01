import axios from 'axios';

export const ADD_CAR_IMAGE = 'ADD_CAR_IMAGE';

export async function postImage(data) {
  const res = await axios
    .post('http://localhost:4000/image', data);
  return dispatch => dispatch({
    type: ADD_CAR_IMAGE,
    payload: res.data,
  });
}
