import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player, ScoresState } from '~/types';

const dudes = [
  {
    name: 'Zeno',
    time: 114,
  },
  {
    name: 'Epictetus',
    time: 121,
  },
  {
    name: 'Lucilius Seneca',
    time: 130,
  },
  {
    name: 'Marcus Aurelius',
    time: 144,
  },
];

const initial_state: ScoresState = {
  players: dudes,
  currentPlayerScore: 0,
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
