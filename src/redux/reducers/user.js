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
      // case SIGNUP_SUCCESS:
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
    // case SIGNUP_FAILURE:
    case SIGNOUT_FAILURE:
      return {
        ...state,
        error: payload,
      };
    // case SET_USER:
    //   return {
    //     ...state,
    //     loading: false,
    //     currentUser: payload,
    //   };
    // case REGISTER_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     currentUser: payload,
    //   };

    default:
      return state;
  }
}
