import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IScoreAddedPayload {
  name: string;
  time: string;
  date: string;
}

const initial_state: any = [];

const scores_slice = createSlice({
  name: 'scores',
  initialState: initial_state,
  reducers: {
    scoreAdded: (state, action: PayloadAction<IScoreAddedPayload>) => {
      const { name, time, date } = action.payload;
      state.push({ name, time, date });
    },
  },
});

export const {
  actions: scores_actions,
  reducer: scores_reducer,
} = scores_slice;
