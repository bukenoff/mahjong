import { Tile } from '~/types';
import { createAction } from '@reduxjs/toolkit';

export const tileAddedToStack = createAction(
  'SelectedTiles/tile_added_to_stack',
  (tile: Tile) => ({
    payload: {
      tile,
    },
  }),
);

export const stackCleared = createAction('SelectedTiles/stack_cleared');

export const selectTile = createAction(
  'SelectedTiles/select_tile',
  (tile: Tile) => ({
    payload: {
      tile,
    },
  }),
);
