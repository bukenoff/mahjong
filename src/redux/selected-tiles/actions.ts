import { SelectedTilesActions, Tile } from '~/types';
import { createAction } from '@reduxjs/toolkit';

const tileAddedToStack = createAction(SelectedTilesActions.TILE_ADDED_TO_STACK,
  (tile: Tile) => ({
    payload: {
      tile,
    },
  })
);

const stackCleared = createAction(SelectedTilesActions.STACK_CLEARED);

const selectTile = createAction(SelectedTilesActions.SELECT_TILE,
  (tile: Tile) => ({
    payload: {
      tile,
    }
  })
);

export {
  tileAddedToStack,
  stackCleared,
  selectTile,
};
