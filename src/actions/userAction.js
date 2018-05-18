import axios from "axios";

export const USER_SIGNUP = "USER_SIGNUP";
export const GET_USER = "GET_USER";

export function postUser(data, callback) {
  const request = axios
    .post("http://localhost:3000/user", data)
    .then(() => callback());
  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: USER_SIGNUP,
        payload: data
      });
    });
  };
}

export function getUser(email) {
  const request = axios.get(`http://localhost:3000/user?email=${email}`);

  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: GET_USER,
        payload: data
      });
    });
  };
}
