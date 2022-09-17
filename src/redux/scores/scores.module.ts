import { IModule } from 'redux-dynamic-modules';
import { DynamicState } from '~/types';
import { scores_reducer } from './scores.slice';

export const getScoresModule = (): IModule<DynamicState<'scores'>> => {
  return {
    id: 'scores',
    reducerMap: {
      scores: scores_reducer,
    },
  };
};
