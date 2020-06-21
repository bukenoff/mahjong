import { State } from '~/types';

const selectStack = (state: State): State['selected_tiles']['stack'] => {
  return state.selected_tiles.stack;
};

export { selectStack };