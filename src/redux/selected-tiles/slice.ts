/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedTilesState, Tile } from '~/types';

const initial_state: SelectedTilesState = {
  stack: [],
};

const selected_tiles_slice = createSlice({
  name: 'selected_tiles',
  initialState: initial_state,
  reducers: {
    tileAddedToStack(state, action: PayloadAction<{ tile: Tile }>) {
      const { tile } = action.payload;

      state.stack.push(tile);
    },
    stackCleared(state) {
      state.stack = [];
    },
    selectTile(state, action: PayloadAction<{ tile: Tile }>) {},
  },
});

export const {
  tileAddedToStack,
  stackCleared,
  selectTile,
} = selected_tiles_slice.actions;
export default selected_tiles_slice.reducer;
