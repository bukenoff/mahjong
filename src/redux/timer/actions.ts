import { createAction } from '@reduxjs/toolkit';

export const resetTimer = createAction('timer/reset_timer');

export const timerReset = createAction('timer/timer_reset');

export const stopTimer = createAction('timer/stop_timer');

export const timerStopped = createAction(
  'timer/timer_stopped',
  (seconds: number) => ({
    payload: {
      seconds,
    },
  }),
);

export const resumeTimer = createAction('timer/resume_timer');

export const timerResumed = createAction('timer/timer_resumed');
