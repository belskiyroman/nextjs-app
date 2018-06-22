import { LOGIN_ERROR, LOGIN_SUCCESS } from '../types/user.type';

const initialState = {
  isAuth: false,
  profile: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: return { ...state, profile: payload, isAuth: true };
    case LOGIN_ERROR: return { ...state, profile: {}, isAuth: false };
    default: return state;
  }
};

export default userReducer;
