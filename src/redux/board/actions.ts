import { BoardActions, Tile, TileUpdate, TileCoordinatesPair } from '~/types';

const updateTile = (
  coordinates: Tile['coordinates'],
  update: TileUpdate,
) => ({
  type: BoardActions.UPDATE_TILE,
  coordinates,
  update,
});


// Since dispatching multiple actions
// sequentially is considered bad
// I created actions to update and delete two tiles at a time
// hopefully this will lead to less rerenders and better performance
// but who knows ¯\_(ツ)_/¯
const updateTwoTiles = (
  coordinates: TileCoordinatesPair,
  update: TileUpdate,
) => ({
  type: BoardActions.UPDATE_TWO_TILES,
  coordinates,
  update,
});

const removeTwoTiles = (
  coordinates: TileCoordinatesPair,
) => ({
  type: BoardActions.REMOVE_TWO_TILES,
  coordinates,
});

export {
  updateTile,
  updateTwoTiles,
  removeTwoTiles,
};
