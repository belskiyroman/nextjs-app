import { spawn, all } from 'redux-saga/effects';
import candidatesSagas from './candidate.saga';

const sagas = [
  candidatesSagas,
];

const rootSaga = function* () {
  yield all(sagas.map(spawn));
};

export default rootSaga;
