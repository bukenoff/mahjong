import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player, ScoresState } from '~/types';

const initial_state: ScoresState = {
  players: [],
  currentPlayerScore: 0,
};

const scores_slice = createSlice({
  name: 'scores',
  initialState: initial_state,
  reducers: {
    scoreAdded: (state, action: PayloadAction<Player>) => {
      const { name, time } = action.payload;
      state.players.push({ name, time });
    },
    gameStopped: (state, action: PayloadAction<{ score: number }>) => {
      const { score } = action.payload;
      state.currentPlayerScore = score;
    },
  },
});

export const {
  actions: scores_actions,
  reducer: scores_reducer,
} = scores_slice;
