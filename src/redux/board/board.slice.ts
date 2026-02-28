import {
  createSlice,
  type CaseReducer,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type {
  BoardState,
  Tile,
  TileUpdate,
  TileCoordinates,
  TileCoordinatesPair,
  Board,
} from "../../types";

const initial_state = {} satisfies BoardState as BoardState;

type BoardReducer<T = undefined> = T extends undefined
  ? (state: BoardState) => void
  : CaseReducer<BoardState, PayloadAction<T>>;

const board_slice = createSlice<
  BoardState,
  {
    generateNewBoard: BoardReducer;
    tileUpdated: BoardReducer<{
      coordinates: Tile["coordinates"];
      update: TileUpdate;
    }>;
    multipleTilesUpdated: BoardReducer<{
      coordinates: TileCoordinates[];
      update: TileUpdate;
    }>;

    twoTilesRemoved: BoardReducer<TileCoordinatesPair>;
    newBoardGenerated: BoardReducer<Board>;
    multipleTilesRestored: BoardReducer<[Tile, Tile]>;
    shuffleBoard: BoardReducer;
    boardShuffled: BoardReducer<Board>;
  }
>({
  name: "board",
  initialState: initial_state,
  reducers: {
    generateNewBoard(state) {
      return state;
    },
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
      return state;
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
      const coordinates = action.payload;

      coordinates.forEach(({ layer, row, col }) => {
        if (!state) return state;

        if (!state[layer]?.[row]?.[col]) {
          return state;
        }

        state[layer][row][col] = null;
      });
      return state;
    },
    newBoardGenerated(state, action) {
      console.log("reduceer", state, action);
      return action.payload;
    },
    multipleTilesRestored(state, action) {
      const tile_pair = action.payload;

      if (!state) return state;

      tile_pair.forEach((tile) => {
        const {
          coordinates: { layer, row, col },
        } = tile;

        state[layer][row][col] = tile;
      });
      return state;
    },
    shuffleBoard(state) {
      return state;
    },
    boardShuffled(state, action) {
      return action.payload;
    },
  },
});

export const { actions: board_actions, reducer: board_reducer } = board_slice;
