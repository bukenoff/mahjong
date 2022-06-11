/* eslint-disable @typescript-eslint/no-empty-function */
import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedTilesState, Tile } from '~/types';
import { board_actions } from '../board/board.slice';

const initial_state: SelectedTilesState = {
  stack: [],
};

type SelectedTilesReducer<T = undefined> = T extends undefined
  ? (state: SelectedTilesState) => void
  : CaseReducer<SelectedTilesState, PayloadAction<T>>;

const selected_tiles_slice = createSlice<
  SelectedTilesState,
  {
    tileAddedToStack: SelectedTilesReducer<Tile>;
    stackCleared: SelectedTilesReducer;
    selectTile: SelectedTilesReducer<Tile>;
  }
>({
  name: 'selected_tiles',
  initialState: initial_state,
  reducers: {
    tileAddedToStack(state, action) {
      const tile = action.payload;

      state.stack.push(tile);
    },
    stackCleared(state) {
      state.stack = [];
    },
    selectTile() {},
  },
  extraReducers(builder) {
    return builder.addCase(board_actions.boardShuffled, (state) => {
      state.stack = [];
    });
  },
});

export const {
  actions: selected_tiles_actions,
  reducer: selected_tiles_reducer,
} = selected_tiles_slice;
