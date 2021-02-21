/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice, Action } from '@reduxjs/toolkit';
import { TilePairsResolvedCountState } from '~/types';
import { newBoardGenerated } from '../board/slice';

const initial_state: TilePairsResolvedCountState = 0;

const tiles_pairs_resolved_count_slice = createSlice({
  name: 'tiles_pairs_resolved_count',
  initialState: initial_state,
  reducers: {
    tilePairsResolvedCountIncremented: (state, action: Action) => {
      state = state + 1;
    },
    tilePairsResolvedCountDecremented: (state, action: Action) => {
      state = state - 1;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(newBoardGenerated, (state) => {
      state = 0;
    }),
});

export const {
  tilePairsResolvedCountDecremented,
  tilePairsResolvedCountIncremented,
} = tiles_pairs_resolved_count_slice.actions;
export default tiles_pairs_resolved_count_slice.reducer;
