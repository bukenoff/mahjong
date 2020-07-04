import { SelectedTilesActions, Tile } from '~/types';
import { createAction } from '@reduxjs/toolkit';

const addTileToStack = createAction(SelectedTilesActions.ADD_TILE_TO_STACK,
  (tile: Tile) => ({
    payload: {
      tile,
    },
  })
);

const removeTilesFromStack = createAction(SelectedTilesActions.REMOVE_TILES_FROM_STACK);

const resolveTile = createAction(SelectedTilesActions.RESOLVE_TILE,
  (tile: Tile) => ({
    payload: {
      tile,
    }
  })
);

const selectTile = createAction(SelectedTilesActions.SELECT_TILE,
  (tile: Tile) => ({
    payload: {
      tile,
    }
  })
);

export {
  addTileToStack,
  removeTilesFromStack,
  resolveTile,
  selectTile,
};
