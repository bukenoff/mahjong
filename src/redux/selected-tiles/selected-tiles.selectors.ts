import { State } from '~/types';

export const selectStack = (state: State): State['selected_tiles']['stack'] => {
  return state.selected_tiles.stack;
};
