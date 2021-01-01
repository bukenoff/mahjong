import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { store, persistor, history } from './redux/store';
import '~/styles/reset.scss';
import '~/styles/global.scss';

import GameView from './containers/GameView';

const App: FC = () => (
  <Provider store={store}>
    <PersistGate loading={<div>...loading</div>} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={GameView} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
