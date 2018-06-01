import { USER_SIGNUP, GET_USER, LOGGED_IN } from './../actions/userAction';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_SIGNUP:
      return { ...state, user: action.payload.data };
    case GET_USER:
      return { ...action.payload };
    case LOGGED_IN:
      console.log('fsdfs', action.payload);
      return { loggedIn: action.payload };
    default:
      return state;
  }
}
