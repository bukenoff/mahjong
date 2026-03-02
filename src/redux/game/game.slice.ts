import { createSlice } from '@reduxjs/toolkit'
import type { GameState } from '../../types'

const initial_state = {
  is_over: true,
} as GameState

const game_slice = createSlice({
  name: 'game',
  initialState: initial_state,
  reducers: {
    gameStarted(state) {
      state.is_over = false
    },
    gameStopped(state) {
      state.is_over = true
    },
  },
})

export const { actions: game_actions, reducer: game_reducer } = game_slice
