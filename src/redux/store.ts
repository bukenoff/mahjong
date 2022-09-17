import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux-dynamic-modules';

import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { getRouterModule } from './router/router.module';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const store = createStore(
  {
    initialState,
    enhancers: [
      compose(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
    ],
    extensions: [getSagaExtension()],
  },
  getRouterModule(),
);

const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

export { store, persistor, history };
