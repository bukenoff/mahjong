import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';

import boardReducer from './board/slice';
import selectedTilesReducer from './selected-tiles/slice';
import processingHandler from './processing/slice';
import timerReducer from './timer/slice';
import stepsReducer from './steps/slice';
import scoresReducer from './scores/slice';
import { connectRouter } from 'connected-react-router';

const scores_persist_config = {
  key: 'scores',
  storage,
};

const rootReducer = (history: ReturnType<typeof createBrowserHistory>) =>
  combineReducers({
    board: boardReducer,
    selected_tiles: selectedTilesReducer,
    processing: processingHandler,
    timer: timerReducer,
    steps: stepsReducer,
    router: connectRouter(history),
    scores: persistReducer(scores_persist_config, scoresReducer),
  });

export default rootReducer;
