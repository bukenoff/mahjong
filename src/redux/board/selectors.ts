import { TileCoordinates, Tile, State } from '~/types';

export const selectBoard = (state: State): State['board'] => {
  return state.board;
};

export const selectTileFromBoard = (
  state: State,
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col'],
): Tile | null => {
  if (
    !state ||
    !state.board ||
    !state.board[layer] ||
    !state.board[layer][row] ||
    !state.board[layer][row][col]
  ) {
    return null;
  }

  return state.board[layer][row][col];
};
