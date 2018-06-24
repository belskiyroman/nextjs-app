import { CANDIDATES_FETCH_ALL_SUCCESS, CANDIDATES_FETCH_ALL_ERROR } from '../types/candidates.type';
import list from '../../seeds/api/candidates/list.json';

const initialState = {
  fetched: false,
  candidatesList: list,
};

const candidatesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CANDIDATES_FETCH_ALL_SUCCESS: return { ...state, candidatesList: payload, fetched: true };
    default: return state;
  }
};

export default candidatesReducer;