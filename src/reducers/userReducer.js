import { USER_SIGNUP, GET_USER, LOGGED_IN, UPDATE_USER } from './../actions/userAction';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_SIGNUP:
      return { ...state, user: action.payload.data };
    case GET_USER:
      return { ...action.payload };
    case LOGGED_IN:
      return { loggedIn: action.payload };
    case UPDATE_USER:
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
}
