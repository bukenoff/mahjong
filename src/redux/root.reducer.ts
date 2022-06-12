import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';

import { board_reducer } from './board/board.slice';
import { selected_tiles_reducer } from './selected-tiles/selected-tiles.slice';
import { timer_reducer } from './timer/timer.slice';
import { steps_reducer } from './steps/steps.slice';
import { scores_reducer } from './scores/scores.slice';
import { connectRouter } from 'connected-react-router';
import { game_reducer } from './game/game.slice';

const scores_persist_config = {
  key: 'scores',
  storage,
};

const rootReducer = (history: ReturnType<typeof createBrowserHistory>) =>
  combineReducers({
    board: board_reducer,
    selected_tiles: selected_tiles_reducer,
    game: game_reducer,
    timer: timer_reducer,
    steps: steps_reducer,
    router: connectRouter(history),
    scores: persistReducer(scores_persist_config, scores_reducer),
  });

export default rootReducer;
