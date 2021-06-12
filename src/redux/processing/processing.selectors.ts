import { State } from '~/types';

export const selectProcessing = (state: State): State['processing'] => {
  return state.processing;
};
