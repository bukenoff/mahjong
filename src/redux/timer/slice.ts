/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { TimerState } from '~/types';

const initial_state: TimerState = {
  is_stopped: false,
  stopped_at: null,
};

const timer_slice = createSlice({
  name: 'timer',
  initialState: initial_state,
  reducers: {
    timerResumed: (state) => {
      state.is_stopped = false;
      state.stopped_at = null;
    },
    timerStopped: (state, action: PayloadAction<{ seconds: number }>) => {
      const { seconds } = action.payload;

      state.is_stopped = true;
      state.stopped_at = seconds;
    },
    resetTimer: (state, action: Action) => {},
    timerReset: (state, action: Action) => {},
    stopTimer: (state, action: Action) => {},
    resumeTimer: (state, action: Action) => {},
  },
});

export const {
  timerResumed,
  timerStopped,
  resetTimer,
  timerReset,
  stopTimer,
  resumeTimer,
} = timer_slice.actions;
export default timer_slice.reducer;
