import { IModule } from 'redux-dynamic-modules';
import { DynamicState } from '~/types';
import { timer_reducer } from './timer.slice';

export const getTimerModule = (): IModule<DynamicState<'timer'>> => {
  return {
    id: 'timer',
    reducerMap: {
      timer: timer_reducer,
    },
  };
};
