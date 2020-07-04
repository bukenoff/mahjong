import { createReducer } from '@reduxjs/toolkit';
import { BoardState, BoardActions, BoardHandler } from '~/types';
import { createBoard } from '~/logic/createBoard';
import { tileUpdated, twoTilesUpdated, twoTilesRemoved } from './actions';

const initialState: BoardState = createBoard();

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

const handleTwoTilesUpdated: BoardHandler<typeof twoTilesUpdated> = (
  state,
  { payload: { coordinates, update }},
) => {
  const [first_tile_coordinates, second_tile_coordinates] = coordinates;

  const {
    layer: first_tile_layer,
    row: first_tile_row,
    col: first_tile_col,
  } = first_tile_coordinates;

  const {
    layer: second_tile_layer,
    row: second_tile_row,
    col: second_tile_col,
  } = second_tile_coordinates;

  state[first_tile_layer][first_tile_row][first_tile_col] = {
    ...state[first_tile_layer][first_tile_row][first_tile_col],
    ...update,
  };

  state[second_tile_layer][second_tile_row][second_tile_col] = {
    ...state[second_tile_layer][second_tile_row][second_tile_col],
    ...update,
  };
};

const handleTwoTilesRemoved: BoardHandler<typeof twoTilesRemoved> = (
  state,
  { payload: { coordinates }},
) => {
  const [first_tile_coordinates, second_tile_coordinates] = coordinates;

  const {
    layer: first_tile_layer,
    row: first_tile_row,
    col: first_tile_col,
  } = first_tile_coordinates;

  const {
    layer: second_tile_layer,
    row: second_tile_row,
    col: second_tile_col,
  } = second_tile_coordinates;

  state[first_tile_layer][first_tile_row][first_tile_col] = null;
  state[second_tile_layer][second_tile_row][second_tile_col] = null;
};

export const HANDLERS = {
  [BoardActions.TILE_UPDATED]: handleTileUpdated,
  [BoardActions.TWO_TILES_UPDATED]: handleTwoTilesUpdated,
  [BoardActions.TWO_TILES_REMOVED]: handleTwoTilesRemoved,
};

export default createReducer(initialState, HANDLERS);
