import { combineReducers } from 'redux';
import boardReducer from './board/reducers';
import selectedTilesReducer from './selected-tiles/reducer';
import processingHandler from './processing/reducer';
import timerReducer from './timer/reducer';

const rootReducer = () => combineReducers({
  board: boardReducer,
  selected_tiles: selectedTilesReducer,
  processing: processingHandler,
  timer: timerReducer,
});

export default rootReducer;
