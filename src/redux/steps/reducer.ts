import { createReducer } from '@reduxjs/toolkit';
import { StepsState } from '~/types';
import {
  stepIndexDecremented,
  stepIndexIncremented,
  stepAddedToStack,
  stepsMadeIncremented,
} from './actions';
import { newBoardGenerated } from '../board/actions';

const initialState: StepsState = {
  step_index: -1,
  steps_stack: [],
  steps_made: 0,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(stepIndexIncremented, (state) => {
      state.step_index = state.step_index + 1;
    })
    .addCase(stepIndexDecremented, (state) => {
      state.step_index = state.step_index - 1;
    })
    .addCase(stepAddedToStack, (state, { payload }) => {
      const { tile_pair } = payload;
      const { step_index } = state;
      let { steps_stack } = state;

      if (steps_stack.length === step_index + 1) {
        steps_stack.push(tile_pair);
        return;
      }

      steps_stack = steps_stack.slice(0, step_index + 1);
    })
    .addCase(newBoardGenerated, (state) => {
      state.step_index = -1;
      state.steps_stack = [];
      state.steps_made = 0;
    })
    .addCase(stepsMadeIncremented, (state) => {
      state.steps_made = state.steps_made + 1;
    }),
);
