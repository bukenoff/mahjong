import React, { FC, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { store, persistor, history } from './redux/store';
import { PATHS } from './constants/paths';
import '~/styles/reset.scss';
import '~/styles/global.scss';

const GameView = lazy(() => import('./containers/GameView'));
const StartView = lazy(() => import('./containers/StartView'));
const Scores = lazy(() => import('./containers/Scores'));

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <main>
        <Suspense fallback="Loading...">
          <ConnectedRouter history={history}>
            <Route exact path={PATHS.HOME} component={StartView} />
            <Route path={PATHS.GAME} component={GameView} />
            <Route path={PATHS.SCORES} component={Scores} />
          </ConnectedRouter>
        </Suspense>
      </main>
    </PersistGate>
  </Provider>
);

export default App;
