import { ISagaModule } from 'redux-dynamic-modules-saga';
import { DynamicState } from '~/types';
import { timer_reducer } from './timer.slice';
import timer_sagas from './timer.sagas';

export const getTimerModule = (): ISagaModule<DynamicState<'timer'>> => {
  return {
    id: 'timer',
    reducerMap: {
      timer: timer_reducer,
    },
    sagas: [timer_sagas],
  };
};
