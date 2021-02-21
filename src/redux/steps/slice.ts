/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { Tile, StepsState } from '~/types';
import { newBoardGenerated } from '../board/slice';

const initial_state: StepsState = {
  step_index: -1,
  steps_stack: [],
  steps_made: 0,
};

const steps_slice = createSlice({
  name: 'steps',
  initialState: initial_state,
  reducers: {
    takeStepBack: (state, action: Action) => {},
    takeStepForward: (state, action: Action) => {},
    stepBackTaken: (state, action: Action) => {},
    stepForwardTaken: (state, action: Action) => {},
    stepIndexIncremented: (state, action: Action) => {
      state.step_index = state.step_index + 1;
    },
    stepIndexDecremented: (state, action: Action) => {
      state.step_index = state.step_index - 1;
    },
    stepAddedToStack: (
      state,
      action: PayloadAction<{ tile_pair: [Tile, Tile] }>,
    ) => {
      const { tile_pair } = action.payload;
      const { step_index } = state;
      let { steps_stack } = state;

      if (steps_stack.length === step_index + 1) {
        steps_stack.push(tile_pair);
        return;
      }

      steps_stack = steps_stack.slice(0, step_index + 1);
    },
    stepsMadeIncremented: (state, action: Action) => {
      state.steps_made = state.steps_made + 1;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(newBoardGenerated, (state) => {
      state.step_index = -1;
      state.steps_stack = [];
      state.steps_made = 0;
    }),
});

export const {
  stepIndexDecremented,
  stepIndexIncremented,
  stepsMadeIncremented,
  stepAddedToStack,
  stepBackTaken,
  stepForwardTaken,
  takeStepBack,
  takeStepForward,
} = steps_slice.actions;
export default steps_slice.reducer;
