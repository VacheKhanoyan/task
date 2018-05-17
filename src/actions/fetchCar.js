import axios from "axios";

export const FETCH_CARS = "FETCH_CARS";

export default function getCar() {
  const request = axios.get("http://localhost:3000/cars");
  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: FETCH_CARS,
        payload: data
      });
    });
  };
}
