import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERR,
  LOGOUT,
} from '../actions/types';

const initiaState = {
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function (state = initiaState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
