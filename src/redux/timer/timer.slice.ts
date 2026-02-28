import { createSlice } from "@reduxjs/toolkit";
import type { TimerState } from "../../types";

const initial_state = {
  is_stopped: false,
  stopped_at: null,
} as TimerState;

const timer_slice = createSlice({
  name: "timer",
  initialState: initial_state,
  reducers: {
    timerResumed(state) {
      state.is_stopped = false;
      state.stopped_at = null;
    },
    timerStopped(state, action) {
      const seconds = action.payload;

      state.is_stopped = true;
      state.stopped_at = seconds;
    },
    resetTimer(state) {
      return state;
    },
    timerReset(state) {
      return state;
    },
    stopTimer(state) {
      return state;
    },
    resumeTimer(state) {
      return state;
    },
  },
});

export const { actions: timer_actions, reducer: timer_reducer } = timer_slice;
