import { BoardActions, Tile, TileUpdate, TileCoordinatesPair } from '~/types';
import { createAction } from '@reduxjs/toolkit';

const tileUpdated = createAction(BoardActions.TILE_UPDATED,  (
  coordinates: Tile['coordinates'],
  update: TileUpdate,
) => ({
  payload: {
    coordinates,
    update,
  }})
);


// Since dispatching multiple actions
// sequentially is considered bad
// I created actions to update and delete two tiles at a time
// hopefully this will lead to less rerenders and better performance
// but who knows ¯\_(ツ)_/¯
const twoTilesUpdated = createAction(BoardActions.TWO_TILES_UPDATED, (
  coordinates: TileCoordinatesPair,
  update: TileUpdate,
) => ({
  payload: {
    coordinates,
    update,
  }})
);

const twoTilesRemoved = createAction(BoardActions.TWO_TILES_REMOVED, (
  coordinates: TileCoordinatesPair,
) => ({
  payload: {
    coordinates,
  }})
);

export {
  tileUpdated,
  twoTilesUpdated,
  twoTilesRemoved,
};
