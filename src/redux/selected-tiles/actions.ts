import { SelectedTilesActions, Tile } from '~/types';

const addTileToStack = (tile: Tile) => ({
  type: SelectedTilesActions.ADD_TILE_TO_STACK,
  tile,
});

const removeTilesFromStack = () => ({
  type: SelectedTilesActions.REMOVE_TILES_FROM_STACK,
});

const resolveTile = (tile: Tile) => ({
  type: SelectedTilesActions.RESOLVE_TILE,
  tile,
});

const selectTile = (tile: Tile) => ({
  type: SelectedTilesActions.SELECT_TILE,
  tile,
});

export {
  addTileToStack,
  removeTilesFromStack,
  resolveTile,
  selectTile,
};
