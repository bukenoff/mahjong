import { createReducer } from '@reduxjs/toolkit';
import { StepsState, TilePairsResolvedCountState } from '~/types';
import {
  tilePairsResolvedCountDecremented,
  tilePairsResolvedCountIncremented,
} from './actions';
import { newBoardGenerated } from '../board/actions';

const initialState: TilePairsResolvedCountState = 0;

export default createReducer(initialState, (builder) =>
  builder
    .addCase(tilePairsResolvedCountIncremented, (state) => {
      state = state + 1;
    })
    .addCase(tilePairsResolvedCountDecremented, (state) => {
      state = state - 1;
    })
    .addCase(newBoardGenerated, (state) => {
      state = 0;
    }),
);
