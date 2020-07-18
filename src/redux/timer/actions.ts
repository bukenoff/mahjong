import { createAction } from '@reduxjs/toolkit';
import { TimerActions } from '~/types';

const resetTimer = createAction(
  TimerActions.RESET_TIMER,
  () => ({
    payload: null,
  }),
);

const timerReset = createAction(
  TimerActions.TIMER_RESET,
  () => ({
    payload: null,
  }),
);

const stopTimer = createAction(
  TimerActions.STOP_TIMER,
  () => ({
    payload: null,
  }),
);

const timerStopped = createAction(
  TimerActions.TIMER_STOPPED,
  (seconds: number) => ({
    payload: {
      seconds,
    },
  }),
);

const resumeTimer = createAction(
  TimerActions.RESUME_TIMER,
  () => ({
    payload: null,
  }),
);

const timerResumed = createAction(
  TimerActions.TIMER_RESUMED,
  () => ({
    payload: null,
  }),
);

export {
  resetTimer,
  timerReset,
  stopTimer,
  timerStopped,
  resumeTimer,
  timerResumed,
};
