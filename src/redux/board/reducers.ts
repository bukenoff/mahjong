import { createReducer } from '@reduxjs/toolkit';
import { BoardState, BoardActions, BoardHandler } from '~/types';
import { createBoard } from '~/logic/createBoard';
import { updateTile, removeTile } from './actions';

const initialState: BoardState = createBoard();

const updateTileHandler: BoardHandler<typeof updateTile> = (
  state,
  { coordinates, update }
) => ({
  ...state,
  [coordinates.layer]: {
    ...state[coordinates.layer],
    [coordinates.row]: {
      ...state[coordinates.layer][coordinates.row],
      [coordinates.col]: {
        ...state[coordinates.layer][coordinates.row][coordinates.col],
        ...update,
      }
    }
  }
});

const removeTileHandler: BoardHandler<typeof removeTile> = (
  state,
  { coordinates }
) => ({
  ...state,
  [coordinates.layer]: {
    ...state[coordinates.layer],
    [coordinates.row]: {
      ...state[coordinates.layer][coordinates.row],
      [coordinates.col]: null,
    }
  },
});

export const HANDLERS = {
  [BoardActions.UPDATE_TILE]: updateTileHandler,
  [BoardActions.REMOVE_TILE]: removeTileHandler,
};

export default createReducer(initialState, HANDLERS);
