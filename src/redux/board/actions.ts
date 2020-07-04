import { BoardActions, Tile, TileUpdate, TileCoordinatesPair } from '~/types';
import { createAction } from '@reduxjs/toolkit';

const updateTile = createAction(BoardActions.UPDATE_TILE,  (
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
const updateTwoTiles = createAction(BoardActions.UPDATE_TWO_TILES, (
  coordinates: TileCoordinatesPair,
  update: TileUpdate,
) => ({
  payload: {
    coordinates,
    update,
  }})
);

const removeTwoTiles = createAction(BoardActions.REMOVE_TWO_TILES, (
  coordinates: TileCoordinatesPair,
) => ({
  payload: {
    coordinates,
  }})
);

export {
  updateTile,
  updateTwoTiles,
  removeTwoTiles,
};
