/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createSlice,
  type PayloadAction,
  type CaseReducer,
} from "@reduxjs/toolkit";
import type { TimerState } from "../../types";

const initial_state: TimerState = {
  is_stopped: false,
  stopped_at: null,
};

type TimerReducer<T = undefined> = T extends undefined
  ? (state: TimerState) => void
  : CaseReducer<TimerState, PayloadAction<T>>;

const timer_slice = createSlice<
  TimerState,
  {
    timerResumed: TimerReducer;
    timerStopped: TimerReducer<number>;
    resetTimer: TimerReducer;
    timerReset: TimerReducer;
    stopTimer: TimerReducer;
    resumeTimer: TimerReducer;
  }
>({
  name: "timer",
  initialState: initial_state,
  reducers: {
    timerResumed(state) {
      state.is_stopped = false;
      state.stopped_at = null;
      return state;
    },
    timerStopped(state, action) {
      const seconds = action.payload;

      state.is_stopped = true;
      state.stopped_at = seconds;
      return state;
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
