import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const applyDevMiddlewares = middlewares => composeWithDevTools(
  middlewares,
  applyMiddleware(createLogger({ collapsed: true })),
);

export default applyDevMiddlewares;
