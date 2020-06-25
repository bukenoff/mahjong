import { State } from '~/types';

const selectProcessing = (state: State): State['processing'] => {
  return state.processing;
};

export {
  selectProcessing,
};
