import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProcessingState } from '~/types';

const initial_state: ProcessingState = false;

type ProcessingReducer<T = undefined> = T extends undefined
  ? (state: ProcessingState) => void
  : CaseReducer<ProcessingState, PayloadAction<T>>;

const processing_slice = createSlice<
  ProcessingState,
  {
    processingToggled: ProcessingReducer<{ value: boolean }>;
  }
>({
  name: 'processing',
  initialState: initial_state,
  reducers: {
    processingToggled: (state, action) => {
      return action.payload.value;
    },
  },
});

export const {
  actions: processing_actions,
  reducer: processing_reducer,
} = processing_slice;
