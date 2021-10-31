/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { Tile, StepsState } from '~/types';
import { board_actions } from '../board/board.slice';

const initial_state: StepsState = {
  step_index: -1,
  steps_stack: [],
  steps_made: 0,
};

type StepsReducer<T = undefined> = T extends undefined
  ? (state: StepsState) => void
  : CaseReducer<StepsState, PayloadAction<T>>;

const steps_slice = createSlice<
  StepsState,
  {
    stepIndexIncremented: StepsReducer;
    stepIndexDecremented: StepsReducer;
    stepAddedToStack: StepsReducer<{ tile_pair: [Tile, Tile] }>;
    stepsMadeIncremented: StepsReducer;
    takeStepBack: StepsReducer;
    takeStepForward: StepsReducer;
    stepBackTaken: StepsReducer;
    stepForwardTaken: StepsReducer;
  }
>({
  name: 'steps',
  initialState: initial_state,
  reducers: {
    stepIndexIncremented: (state) => {
      state.step_index = state.step_index + 1;
    },
    stepIndexDecremented: (state) => {
      state.step_index = state.step_index - 1;
    },
    stepAddedToStack: (state, action) => {
      const { tile_pair } = action.payload;
      const { step_index } = state;
      let { steps_stack } = state;

      if (steps_stack.length === step_index + 1) {
        steps_stack.push(tile_pair);
      } else {
        steps_stack = steps_stack.slice(0, step_index + 1);
      }
    },
    stepsMadeIncremented: (state) => {
      state.steps_made = state.steps_made + 1;
    },
    takeStepBack: () => {},
    takeStepForward: () => {},
    stepBackTaken: () => {},
    stepForwardTaken: () => {},
  },
  extraReducers: (builder) =>
    builder.addCase(board_actions.newBoardGenerated, (state) => {
      state.step_index = -1;
      state.steps_stack = [];
      state.steps_made = 0;
    }),
});

export const { actions: steps_actions, reducer: steps_reducer } = steps_slice;
