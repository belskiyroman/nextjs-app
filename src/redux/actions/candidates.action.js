import {
  CANDIDATES_FETCH_ALL,
  CANDIDATES_FETCH_ALL_SUCCESS,
  CANDIDATES_FETCH_ALL_ERROR
} from '../types/candidates.type';

export const fetchCandidatesList = () => ({ type: CANDIDATES_FETCH_ALL });
export const fetchCandidatesListSuccess = payload => ({ type: CANDIDATES_FETCH_ALL_SUCCESS, payload });
export const fetchCandidatesListError = payload => ({ type: CANDIDATES_FETCH_ALL_ERROR, payload });
