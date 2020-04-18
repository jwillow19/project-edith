import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERR,
  LOGOUT,
  SET_USER,
} from '../actions/types';

const initialState = {
  loading: true,
  currentUser: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      };
    default:
      return state;
  }
}
