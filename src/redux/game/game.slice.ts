/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { GameState } from '~/types';

const initial_state: GameState = {
  is_over: true,
  player_name: 'anonymous',
};

type GameReducer<T = undefined> = T extends undefined
  ? (state: GameState) => void
  : CaseReducer<GameState, PayloadAction<T>>;

const game_slice = createSlice<
  GameState,
  {
    gameStarted: GameReducer;
    gameStopped: GameReducer;
  }
>({
  name: 'game',
  initialState: initial_state,
  reducers: {
    gameStarted: (state) => {
      state.is_over = false;
    },
    gameStopped: (state) => {
      state.is_over = true;
    },
  },
});

export const { actions: game_actions, reducer: game_reducer } = game_slice;
