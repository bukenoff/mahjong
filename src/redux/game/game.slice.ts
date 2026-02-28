import { createSlice } from '@reduxjs/toolkit'
import type { GameState } from '../../types'

const initial_state = {
  is_over: true,
  player_name: 'anonymous',
  player_score: null,
} as GameState

const game_slice = createSlice({
  name: 'game',
  initialState: initial_state,
  reducers: {
    gameStarted(state, action) {
      const { payload } = action
      state.is_over = false

      if (payload) {
        state.player_name = payload
      }
    },
    gameStopped(state, action) {
      const { payload } = action

      state.is_over = true
      state.player_score = payload
    },
  },
})

export const { actions: game_actions, reducer: game_reducer } = game_slice
