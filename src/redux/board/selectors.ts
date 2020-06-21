import { TileCoordinates, Tile, State } from '~/types';

const selectBoard = (state: State): State['board'] => {
  return state.board;
};

const selectTileFromBoard = (
  state,
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col'],
): Tile | null => {
  return state.board[layer][row][col];
};


export { selectBoard, selectTileFromBoard };
