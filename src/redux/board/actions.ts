import {
  BoardActions,
  Tile,
  TileUpdate,
  TileCoordinatesPair,
  TileCoordinates,
  Board,
} from '~/types';
import { createAction } from '@reduxjs/toolkit';

export const tileUpdated = createAction(
  BoardActions.TILE_UPDATED,
  (coordinates: Tile['coordinates'], update: TileUpdate) => ({
    payload: {
      coordinates,
      update,
    },
  }),
);

// Since dispatching multiple actions
// sequentially is considered bad
// I created actions to update and delete two tiles at a time
// hopefully this will lead to less rerenders and better performance
// but who knows ¯\_(ツ)_/¯
export const multipleTilesUpdated = createAction(
  BoardActions.MULTIPLE_TILES_UPDATED,
  (coordinates: TileCoordinates[], update: TileUpdate) => ({
    payload: {
      coordinates,
      update,
    },
  }),
);

export const twoTilesRemoved = createAction(
  BoardActions.TWO_TILES_REMOVED,
  (coordinates: TileCoordinatesPair) => ({
    payload: {
      coordinates,
    },
  }),
);

export const generateNewBoard = createAction(BoardActions.GENERATE_NEW_BOARD);

export const newBoardGenerated = createAction(
  BoardActions.NEW_BOARD_GENERATED,
  (new_board: Board) => ({
    payload: {
      new_board,
    },
  }),
);

export const multipleTilesRestored = createAction(
  BoardActions.MULTIPLE_TILES_RESTORED,
  (tile_pair: [Tile, Tile]) => ({ payload: { tile_pair } }),
);
