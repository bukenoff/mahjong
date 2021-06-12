/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import {
  BoardState,
  Tile,
  TileUpdate,
  TileCoordinates,
  TileCoordinatesPair,
  Board,
} from '~/types';

const initial_state: BoardState = {};

const board_slice = createSlice({
  name: 'board',
  initialState: initial_state,
  reducers: {
    generateNewBoard(state, action: Action) {},
    tileUpdated(
      state,
      action: PayloadAction<{
        coordinates: Tile['coordinates'];
        update: TileUpdate;
      }>,
    ) {
      const { layer, row, col } = action.payload.coordinates;
      const { update } = action.payload;

      if (!state[layer] && !state[layer][row] && !state[layer][row][col]) {
        return state;
      }

      state[layer][row][col] = {
        ...(state[layer][row][col] as Tile),
        ...update,
      };
    },
    multipleTilesUpdated(
      state,
      action: PayloadAction<{
        coordinates: TileCoordinates[];
        update: TileUpdate;
      }>,
    ) {
      const { coordinates, update } = action.payload;

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
    },
    twoTilesRemoved(
      state,
      action: PayloadAction<{ coordinates: TileCoordinatesPair }>,
    ) {
      const { coordinates } = action.payload;

      coordinates.forEach(({ layer, row, col }) => {
        if (!state) return state;

        if (!state[layer] && !state[layer][row] && !state[layer][row][col]) {
          return state;
        }

        state[layer][row][col] = null;
      });
    },
    newBoardGenerated(state, action: PayloadAction<{ new_board: Board }>) {
      const { new_board } = action.payload;

      return new_board;
    },
    multipleTilesRestored(
      state,
      action: PayloadAction<{ tile_pair: [Tile, Tile] }>,
    ) {
      const { tile_pair } = action.payload;

      tile_pair.forEach((tile) => {
        const {
          coordinates: { layer, row, col },
        } = tile;

        state[layer][row][col] = tile;
      });
    },
  },
});

export const { actions: board_actions, reducer: board_reducer } = board_slice;
