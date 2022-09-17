import { IModule } from 'redux-dynamic-modules';
import { DynamicState } from '~/types';
import { steps_reducer } from './steps.slice';

export const getStepsModule = (): IModule<DynamicState<'steps'>> => {
  return {
    id: 'steps',
    reducerMap: {
      steps: steps_reducer,
    },
  };
};
