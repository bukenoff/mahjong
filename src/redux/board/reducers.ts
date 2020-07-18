import { createReducer } from '@reduxjs/toolkit';
import { BoardState, BoardActions, BoardHandler } from '~/types';
import { tileUpdated, multipleTilesUpdated, twoTilesRemoved, newBoardGenerated } from './actions';

const initialState: BoardState = null;

const handleTileUpdated: BoardHandler<typeof tileUpdated> = (
  state,
  { payload: { coordinates, update }},
) => {
  const { layer, row, col } = coordinates;

  state[layer][row][col] = {
    ...state[layer][row][col],
    ...update,
  };
};

const handleMultipleTilesUpdated: BoardHandler<typeof multipleTilesUpdated> = (
  state,
  { payload: { coordinates, update }},
) => {
  coordinates.forEach(({
    layer,
    row,
    col,
  }) => {
    state[layer][row][col] = {
      ...state[layer][row][col],
      ...update,
    };
  });
};

const handleTwoTilesRemoved: BoardHandler<typeof twoTilesRemoved> = (
  state,
  { payload: { coordinates }},
) => {
  coordinates.forEach(({
    layer,
    row,
    col,
  }) => {
    state[layer][row][col] = null;
  });
};

const handleNewBoardGenerated: BoardHandler<typeof newBoardGenerated> = (
  state,
  { payload: { new_board }},
) => ({
  ...new_board,
});

export const HANDLERS = {
  [BoardActions.TILE_UPDATED]: handleTileUpdated,
  [BoardActions.MULTIPLE_TILES_UPDATED]: handleMultipleTilesUpdated,
  [BoardActions.TWO_TILES_REMOVED]: handleTwoTilesRemoved,
  [BoardActions.NEW_BOARD_GENERATED]: handleNewBoardGenerated,
};

export default createReducer(initialState, HANDLERS);
