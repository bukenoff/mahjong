import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import {
  BoardState,
  Tile,
  TileUpdate,
  TileCoordinates,
  TileCoordinatesPair,
  Board,
} from '~/types';

const initial_state: BoardState = {};

type BoardReducer<T = undefined> = T extends undefined
  ? (state: BoardState) => void
  : CaseReducer<BoardState, PayloadAction<T>>;

const board_slice = createSlice<
  BoardState,
  {
    generateNewBoard: BoardReducer;
    tileUpdated: BoardReducer<{
      coordinates: Tile['coordinates'];
      update: TileUpdate;
    }>;
    multipleTilesUpdated: BoardReducer<{
      coordinates: TileCoordinates[];
      update: TileUpdate;
    }>;

    twoTilesRemoved: BoardReducer<{ coordinates: TileCoordinatesPair }>;
    newBoardGenerated: BoardReducer<{ new_board: Board }>;
    multipleTilesRestored: BoardReducer<{ tile_pair: [Tile, Tile] }>;
    shuffleBoard: BoardReducer;
    boardShuffled: BoardReducer<Board>;
  }
>({
  name: 'board',
  initialState: initial_state,
  reducers: {
    generateNewBoard() {},
    tileUpdated(state, action) {
      const { layer, row, col } = action.payload.coordinates;
      const { update } = action.payload;

      if (!state) return state;

      if (!state[layer] && !state[layer]?.[row]?.[col]) {
        return state;
      }

      state[layer][row][col] = {
        ...(state[layer][row][col] as Tile),
        ...update,
      };
    },
    multipleTilesUpdated(state, action) {
      const { coordinates, update } = action.payload;

      coordinates.forEach(({ layer, row, col }) => {
        if (!state) return state;

        if (!state[layer]?.[row]?.[col]) {
          return state;
        }

        state[layer][row][col] = {
          ...(state[layer][row][col] as Tile),
          ...update,
        };
      });
    },
    twoTilesRemoved(state, action) {
      const { coordinates } = action.payload;

      coordinates.forEach(({ layer, row, col }) => {
        if (!state) return state;

        if (!state[layer]?.[row]?.[col]) {
          return state;
        }

        state[layer][row][col] = null;
      });
    },
    newBoardGenerated(state, action) {
      const { new_board } = action.payload;

      return new_board;
    },
    multipleTilesRestored(state, action) {
      const { tile_pair } = action.payload;

      if (!state) return state;

      tile_pair.forEach((tile) => {
        const {
          coordinates: { layer, row, col },
        } = tile;

        state[layer][row][col] = tile;
      });
    },
    shuffleBoard() {},
    boardShuffled(state, action) {
      state = action.payload;
    },
  },
});

export const { actions: board_actions, reducer: board_reducer } = board_slice;
