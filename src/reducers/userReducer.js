import { USER_SIGNUP, GET_USER } from './../actions/userAction';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_SIGNUP:
      return { ...state, user: action.payload.data };
    case GET_USER:
      return { ...action.payload };
    default:
      return state;
  }
}
