import type { State } from '../../types'

export const selectStack = ({
  selected_tiles,
}: State): State['selected_tiles']['stack'] => selected_tiles.stack

export const selectTilesToRemove = ({
  selected_tiles,
}: State): State['selected_tiles']['tiles_to_remove'] =>
  selected_tiles.tiles_to_remove
