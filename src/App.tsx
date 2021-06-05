import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { store, persistor, history } from './redux/store';
import '~/styles/reset.scss';
import '~/styles/global.scss';

import GameView from './containers/GameView';
import StartView from './containers/StartView';
import Scores from './containers/Scores';
import { PATHS } from './constants/paths';

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={<div>...loading</div>} persistor={persistor}>
      <ConnectedRouter history={history}>
        <main>
          <Route exact path={PATHS.HOME} component={StartView} />
          <Route path={PATHS.GAME} component={GameView} />
          <Route path={PATHS.SCORES} component={Scores} />
        </main>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
