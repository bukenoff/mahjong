import { BoardActions, Tile, TileUpdate, TileCoordinatesPair, TileCoordinates, Board } from '~/types';
import { createAction } from '@reduxjs/toolkit';

const tileUpdated = createAction(
  BoardActions.TILE_UPDATED,
  (coordinates: Tile['coordinates'], update: TileUpdate) => ({
    payload: {
      coordinates,
      update,
    }
  })
);


// Since dispatching multiple actions
// sequentially is considered bad
// I created actions to update and delete two tiles at a time
// hopefully this will lead to less rerenders and better performance
// but who knows ¯\_(ツ)_/¯
const multipleTilesUpdated = createAction(
  BoardActions.MULTIPLE_TILES_UPDATED,
  (coordinates: TileCoordinates[], update: TileUpdate) => ({
    payload: {
      coordinates,
      update,
    }
  })
);

const twoTilesRemoved = createAction(
  BoardActions.TWO_TILES_REMOVED,
  (coordinates: TileCoordinatesPair) => ({
    payload: {
      coordinates,
    },
  })
);

const generateNewBoard = createAction(BoardActions.GENERATE_NEW_BOARD);

const newBoardGenerated = createAction(
  BoardActions.NEW_BOARD_GENERATED,
  (new_board: Board) => ({
    payload: {
      new_board,
    },
  }),
);

export {
  tileUpdated,
  multipleTilesUpdated,
  twoTilesRemoved,
  generateNewBoard,
  newBoardGenerated,
};
