import { CHANGE_URL } from '../types/common.type';

const INITIAL_STATE = {
  currentUrl: global && global.location ? global.location.pathname : '',
};

const commonReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_URL: return { ...state, currentUrl: payload };
    default: return state;
  }
};

export default commonReducer;
