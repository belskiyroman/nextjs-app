import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import applyDevMiddlewares from './dev-midelwares';
import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware);

  if (process.env.NODE_ENV !== 'production' && process.browser) {
    middleware = applyDevMiddlewares(middleware);
  }

  const store = createStore(
    rootReducer,
    initialState,
    middleware,
  );

  /**
   * next-redux-saga depends on `runSagaTask` and `sagaTask` being attached to the store.
   *
   *   `runSagaTask` is used to rerun the rootSaga on the client when in sync mode (default)
   *   `sagaTask` is used to await the rootSaga task before sending results to the client
   *
   */
  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };
  store.runSagaTask();
  return store;
};

export default configureStore;
