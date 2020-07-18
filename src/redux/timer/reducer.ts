import { createReducer } from '@reduxjs/toolkit';
import { TimerActions, TimerState, TimerHandler } from '~/types';
import { timerStopped } from './actions';

const initialState: TimerState = {
  is_stopped: false,
  stopped_at: null,
};

const handleTimerStopped: TimerHandler<typeof timerStopped> = (
  state,
  { payload },
) => {
  state.is_stopped = true;
  state.stopped_at = payload.seconds;
};

const handleTimerResumed = (state) => {
  state.is_stopped = false;
  state.stopped_at = null;
};

export const HANDLERS = {
  [TimerActions.TIMER_RESUMED]: handleTimerResumed,
  [TimerActions.TIMER_STOPPED]: handleTimerStopped,
};

export default createReducer(initialState, HANDLERS);
