import { createReducer } from '@reduxjs/toolkit';
import { ProcessingActions, ProcessingHandler, ProcessingState } from '~/types';
import { processingToggled } from './actions';

const initialState: ProcessingState = false;

const handleProcessingToggled: ProcessingHandler<typeof processingToggled> = (
  state,
  { payload: { value }},
) => (
  state = value
);

export const HANDLERS = {
  [ProcessingActions.PROCESSING_TOGGLED]: handleProcessingToggled,
};

export default createReducer(initialState, HANDLERS);
