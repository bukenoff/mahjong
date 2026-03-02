import { createSlice } from '@reduxjs/toolkit'

import type { StepsState } from '../../types'
import { board_actions } from '../board/board.slice'

const initial_state = {
  step_index: -1,
  steps_stack: [],
  steps_made: 0,
} as StepsState

const steps_slice = createSlice({
  name: 'steps',
  initialState: initial_state,
  reducers: {
    stepIndexIncremented(state) {
      state.step_index = state.step_index + 1
    },
    stepIndexDecremented(state) {
      state.step_index = state.step_index - 1
    },
    stepAddedToStack(state, action) {
      const tile_pair = action.payload
      const { step_index } = state
      let { steps_stack } = state

      if (steps_stack.length === step_index + 1) {
        steps_stack.push(tile_pair)
      } else {
        steps_stack = steps_stack.slice(0, step_index + 1)
      }
    },
    stepsMadeIncremented(state) {
      state.steps_made += 1
    },
    takeStepBack(state) {
      return state
    },
    takeStepForward(state) {
      return state
    },
    stepBackTaken(state) {
      return state
    },
    stepForwardTaken(state) {
      return state
    },
  },
  extraReducers(builder) {
    return builder
      .addCase(board_actions.newBoardGenerated, (state) => {
        state.step_index = -1
        state.steps_stack = []
        state.steps_made = 0
      })
      .addCase(board_actions.boardShuffled, (state) => {
        state.step_index = -1
        state.steps_stack = []
      })
  },
})

export const { actions: steps_actions, reducer: steps_reducer } = steps_slice
