/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createSlice,
  type PayloadAction,
  type CaseReducer,
} from "@reduxjs/toolkit";
import type { GameState } from "../../types";

const initial_state: GameState = {
  is_over: true,
  player_name: "anonymous",
  player_score: null,
};

type GameReducer<T = undefined> = T extends undefined
  ? (state: GameState) => void
  : CaseReducer<GameState, PayloadAction<T>>;

const game_slice = createSlice<
  GameState,
  {
    gameStarted: GameReducer<string>;
    gameStopped: GameReducer<number>;
  }
>({
  name: "game",
  initialState: initial_state,
  reducers: {
    gameStarted(state, action) {
      const { payload } = action;
      state.is_over = false;

      if (payload) {
        state.player_name = payload;
      }
    },
    gameStopped(state, action) {
      const { payload } = action;

      state.is_over = true;
      state.player_score = payload;
    },
  },
});

export const { actions: game_actions, reducer: game_reducer } = game_slice;
