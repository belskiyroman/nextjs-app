import { commonTypes } from '../types';

const INITIAL_STATE = {
  test: true,
  server: '',
};

const commonReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case commonTypes.INDEX_TEST:
      return { ...state, test: payload };
    case commonTypes.SERVER_DATA:
      return { ...state, server: payload };
    default:
      return state;
  }
};

export default commonReducer;
