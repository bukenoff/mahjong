import { createReducer } from '@reduxjs/toolkit';
import { TimerState } from '~/types';
import { timerStopped, timerResumed } from './actions';

const initialState: TimerState = {
  is_stopped: false,
  stopped_at: null,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(timerResumed, (state) => {
      state.is_stopped = false;
      state.stopped_at = null;
    })
    .addCase(timerStopped, (state, { payload }) => {
      state.is_stopped = true;
      state.stopped_at = payload.seconds;
    }),
);
