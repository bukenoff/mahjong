import { createAction } from '@reduxjs/toolkit';
import { TimerActions } from '~/types';

export const resetTimer = createAction(TimerActions.RESET_TIMER, () => ({
  payload: null,
}));

export const timerReset = createAction(TimerActions.TIMER_RESET, () => ({
  payload: null,
}));

export const stopTimer = createAction(TimerActions.STOP_TIMER, () => ({
  payload: null,
}));

export const timerStopped = createAction(
  TimerActions.TIMER_STOPPED,
  (seconds: number) => ({
    payload: {
      seconds,
    },
  }),
);

export const resumeTimer = createAction(TimerActions.RESUME_TIMER, () => ({
  payload: null,
}));

export const timerResumed = createAction(TimerActions.TIMER_RESUMED, () => ({
  payload: null,
}));
