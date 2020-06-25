import { BoardActions, Tile, TileUpdate } from '~/types';

const updateTile = (
  coordinates: Tile['coordinates'],
  update: TileUpdate,
) => ({
  type: BoardActions.UPDATE_TILE,
  coordinates,
  update,
});

const removeTile = (coordinates: Tile['coordinates']) => ({
  type: BoardActions.REMOVE_TILE,
  coordinates,
});

export { updateTile, removeTile };
