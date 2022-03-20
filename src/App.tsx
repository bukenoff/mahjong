import React, { FC, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { store, persistor, history } from './redux/store';
import '~/styles/reset.scss';
import '~/styles/global.scss';

const GameView = lazy(() => import('./containers/GameView'));
const StartView = lazy(() => import('./containers/StartView'));
const Scores = lazy(() => import('./containers/Scores'));
import { PATHS } from './constants/paths';

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={<div>...loading</div>} persistor={persistor}>
      <main>
        <Suspense fallback="loading...">
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
