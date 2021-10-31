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
    gameStopped: ScoresReducer<{ time: number; name: string | null }>;
  }
>({
  name: 'scores',
  initialState: initial_state,
  reducers: {
    scoreAdded: (state, action: PayloadAction<Player>) => {
      const { name, time } = action.payload;
      state.players.push({ name, time });
    },
    gameStopped: (
      state,
      action: PayloadAction<{ time: number; name: string | null }>,
    ) => {
      const { name, time } = action.payload;

      if (!name) {
        return state;
      }

      state.players.push({ name, time });
      state.players.sort((scoreA, scoreB) => scoreA.time - scoreB.time);
    },
  },
});

export const {
  actions: scores_actions,
  reducer: scores_reducer,
} = scores_slice;
