import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { board_reducer } from "./board/board.slice";
import { game_reducer } from "./game/game.slice";
import { scores_reducer } from "./scores/scores.slice";
import { selected_tiles_reducer } from "./selected-tiles/selected-tiles.slice";
import { steps_reducer } from "./steps/steps.slice";
import { tile_pairs_resolved_count_reducer } from "./tile-pairs-resolved-count/tile-pairs-resolved-count.slice";
import { timer_reducer } from "./timer/timer.slice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    board: board_reducer,
    game: game_reducer,
    scores: scores_reducer,
    selected_tiles: selected_tiles_reducer,
    steps: steps_reducer,
    tile_pairs_resolved_count: tile_pairs_resolved_count_reducer,
    timer: timer_reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
