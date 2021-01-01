import {
  Tile,
  TileUpdate,
  TileCoordinatesPair,
  TileCoordinates,
  Board,
} from '~/types';
import { createAction } from '@reduxjs/toolkit';

export const tileUpdated = createAction(
  'Board/tile_updated',
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
  'Board/multiple_tiles_updated',
  (coordinates: TileCoordinates[], update: TileUpdate) => ({
    payload: {
      coordinates,
      update,
    },
  }),
);

export const twoTilesRemoved = createAction(
  'Board/two_tiles_removed',
  (coordinates: TileCoordinatesPair) => ({
    payload: {
      coordinates,
    },
  }),
);

export const generateNewBoard = createAction('Board/generate_new_board');

export const newBoardGenerated = createAction(
  'Board/new_board_generated',
  (new_board: Board) => ({
    payload: {
      new_board,
    },
  }),
);

export const multipleTilesRestored = createAction(
  'Board/multiple_tiles_restored',
  (tile_pair: [Tile, Tile]) => ({ payload: { tile_pair } }),
);
