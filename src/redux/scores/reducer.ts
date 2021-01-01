import { createReducer } from '@reduxjs/toolkit';
import { scoreAdded } from './actions';

const initial_state: any = [];

export default createReducer(initial_state, (builder) =>
  builder.addCase(scoreAdded, (state, { payload }) => {
    const { name, time, date } = payload;
    state.push({ name, time, date });
  }),
);
