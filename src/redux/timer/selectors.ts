import { State } from '~/types';

const selectIsStopped = (state: State) => state.timer.is_stopped;

export { selectIsStopped };
