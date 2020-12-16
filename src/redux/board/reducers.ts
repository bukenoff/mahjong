import { createReducer } from '@reduxjs/toolkit';
import { BoardState, Tile } from '~/types';
import {
  tileUpdated,
  multipleTilesUpdated,
  twoTilesRemoved,
  newBoardGenerated,
} from './actions';

const initialState: BoardState = {};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(tileUpdated, (state, { payload }) => {
      const { layer, row, col } = payload.coordinates;
      const { update } = payload;

      if (!state[layer] && !state[layer][row] && !state[layer][row][col]) {
        return state;
      }

      state[layer][row][col] = {
        ...(state[layer][row][col] as Tile),
        ...update,
      };
    })
    .addCase(multipleTilesUpdated, (state, { payload }) => {
      const { coordinates, update } = payload;

      coordinates.forEach(({ layer, row, col }) => {
        if (!state) return state;

        if (!state[layer] && !state[layer][row] && !state[layer][row][col]) {
          return state;
        }

        state[layer][row][col] = {
          ...(state[layer][row][col] as Tile),
          ...update,
        };
      });
    })
    .addCase(twoTilesRemoved, (state, { payload }) => {
      const { coordinates } = payload;

      coordinates.forEach(({ layer, row, col }) => {
        if (!state) return state;

        if (!state[layer] && !state[layer][row] && !state[layer][row][col]) {
          return state;
        }

        state[layer][row][col] = null;
      });
    })
    .addCase(newBoardGenerated, (state, { payload }) => {
      const { new_board } = payload;

      return new_board;
    }),
);
