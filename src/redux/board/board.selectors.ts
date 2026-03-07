import type { TileCoordinates, Tile, State } from '~/types'

export const selectBoard = ({ board }: State): State['board']['value'] =>
  board.value

export const selectTileFromBoard = (
  state: State,
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col']
): Tile | null => {
  if (
    !state ||
    !state.board.value ||
    !state.board.value[layer] ||
    !state.board.value[layer][row] ||
    !state.board.value[layer][row][col]
  ) {
    return null
  }

  return state.board.value[layer][row][col]
}
