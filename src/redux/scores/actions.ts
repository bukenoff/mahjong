import { createAction } from '@reduxjs/toolkit';

export interface IScoreAddedPayload {
  name: string;
  time: string;
  date: string;
}

export const scoreAdded = createAction(
  'scores/score_added',
  ({ name, time, date }: IScoreAddedPayload) => ({
    payload: {
      name,
      time,
      date,
    },
  }),
);
