import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
} from '../actions/types';

const initialState = {
  currentUser: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: null,
      };
    case SIGNIN_FAILURE:
    case SIGNOUT_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
