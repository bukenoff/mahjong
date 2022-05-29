import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './root.reducer';
import rootSaga from './root.saga';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

/* eslint-disable */
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor, history };
