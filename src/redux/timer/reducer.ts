import { createReducer } from '@reduxjs/toolkit';
import { TimerActions } from '~/types';

const initialState = {
  is_stopped: false,
};

const handleTimerStopped = (state) => {
  state.is_stopped = true;
};

const handleTimerResumed = (state) => {
  state.is_stopped = false;
};

export const HANDLERS = {
  // [TimerActions.TIMER_RESET]: () => {},
  [TimerActions.TIMER_RESUMED]: handleTimerResumed,
  [TimerActions.TIMER_STOPPED]: handleTimerStopped,
};

export default createReducer(initialState, HANDLERS);
