import { spawn, all } from 'redux-saga/effects';

const sagas = [];

const rootSaga = function* () {
  yield all(sagas.map(spawn));
};

export default rootSaga;
