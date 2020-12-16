import { createReducer } from '@reduxjs/toolkit';
import { ProcessingState } from '~/types';
import { processingToggled } from './actions';

const initialState: ProcessingState = false;

export default createReducer(initialState, (builder) =>
  builder.addCase(processingToggled, (state, { payload }) => {
    return payload.value;
  }),
);
