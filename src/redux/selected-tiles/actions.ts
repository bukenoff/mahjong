import { SelectedTilesActions, Tile } from '~/types';
import { createAction } from '@reduxjs/toolkit';

export const tileAddedToStack = createAction(
  SelectedTilesActions.TILE_ADDED_TO_STACK,
  (tile: Tile) => ({
    payload: {
      tile,
    },
  }),
);

export const stackCleared = createAction(SelectedTilesActions.STACK_CLEARED);

export const selectTile = createAction(
  SelectedTilesActions.SELECT_TILE,
  (tile: Tile) => ({
    payload: {
      tile,
    },
  }),
);
