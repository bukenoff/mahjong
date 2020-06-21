import { combineReducers } from 'redux';
import boardReducer from './board/reducers';
import selectedTilesReducer from './selected-tiles/reducer';
import processingHandler from './processing/reducer';

const rootReducer = () => combineReducers({
  board: boardReducer,
  selected_tiles: selectedTilesReducer,
  processing: processingHandler,
});

export default rootReducer;
