import type { State } from '../../types'

export const selectStack = ({
  selected_tiles,
}: State): State['selected_tiles']['stack'] => selected_tiles.stack
