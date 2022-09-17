import { ISagaModule } from 'redux-dynamic-modules-saga';
import { DynamicState } from '~/types';
import { steps_reducer } from './steps.slice';
import steps_sagas from './steps.sagas';

export const getStepsModule = (): ISagaModule<DynamicState<'steps'>> => {
  return {
    id: 'steps',
    reducerMap: {
      steps: steps_reducer,
    },
    sagas: [steps_sagas],
  };
};
