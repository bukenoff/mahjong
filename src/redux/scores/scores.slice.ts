import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player, ScoresState } from '~/types';

const initial_state: ScoresState = {
  players: [],
};

type ScoresReducer<T = undefined> = T extends undefined
  ? (state: ScoresState) => void
  : CaseReducer<ScoresState, PayloadAction<T>>;

const scores_slice = createSlice<
  ScoresState,
  {
    scoreAdded: ScoresReducer<Player>;
  }
>({
  name: 'scores',
  initialState: initial_state,
  reducers: {
    scoreAdded: (state, action: PayloadAction<Player>) => {
      const { name, time } = action.payload;
      state.players.push({ name, time });
    },
  },
});

export const {
  actions: scores_actions,
  reducer: scores_reducer,
} = scores_slice;
