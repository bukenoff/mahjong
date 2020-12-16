import { createReducer } from '@reduxjs/toolkit';
import { SelectedTilesState } from '~/types';
import { tileAddedToStack, stackCleared } from './actions';

const initialState: SelectedTilesState = {
  stack: [],
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(tileAddedToStack, (state, { payload }) => {
      const { tile } = payload;

      state.stack.push(tile);
    })
    .addCase(stackCleared, (state) => {
      state.stack = [];
    }),
);
