import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProcessingState } from '~/types';

const initial_state: ProcessingState = false;

const processing_slice = createSlice({
  name: 'processing',
  initialState: initial_state,
  reducers: {
    processingToggled(state, action: PayloadAction<{ value: boolean }>) {
      return action.payload.value;
    },
  },
});

export const {
  actions: processing_actions,
  reducer: processing_reducer,
} = processing_slice;
