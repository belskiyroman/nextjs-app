import { spawn, all, take, call, put } from 'redux-saga/effects';
import { CANDIDATES_FETCH_ALL } from '../types/candidates.type';
import { fetchCandidatesListSuccess, fetchCandidatesListError } from '../actions/candidates.action';
import apiService from '../../services/api.service';

function* candidatesListSaga() {
  while (true) {
    try {
      yield take(CANDIDATES_FETCH_ALL);
      const candidatesList = yield call([apiService, 'candidatesList']);
      yield put(fetchCandidatesListSuccess(candidatesList));
    } catch (error) {
      yield put(fetchCandidatesListError(error));
    }
  }
}

const candidatesSagas = function* () {
  yield all([
    spawn(candidatesListSaga),
  ]);
};

export default candidatesSagas;
