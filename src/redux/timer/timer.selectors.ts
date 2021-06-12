import { State } from '~/types';

export const selectIsStopped = (state: State) => state.timer.is_stopped;
