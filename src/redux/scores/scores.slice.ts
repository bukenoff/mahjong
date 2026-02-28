import {
  type CaseReducer,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Player, ScoresState } from "../../types";

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
  name: "scores",
  initialState: initial_state,
  reducers: {
    scoreAdded(state, action: PayloadAction<Player>) {
      const { name, time } = action.payload;
      state.players.push({ name, time });
      state.players.sort((a, b) => a.time - b.time);
    },
  },
});

export const { actions: scores_actions, reducer: scores_reducer } =
  scores_slice;
