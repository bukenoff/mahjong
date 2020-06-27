import { createReducer } from '@reduxjs/toolkit';
import { ProcessingActions, ProcessingHandler, ProcessingState } from '~/types';
import { toggleProcessing } from './actions';

const initialState: ProcessingState = false;

const toggleProcessingHandler: ProcessingHandler<typeof toggleProcessing> = (
  state,
  { value },
) => (
  state = value
);

export const HANDLERS = {
  [ProcessingActions.TOGGLE_PROCESSING]: toggleProcessingHandler,
};

export default createReducer(initialState, HANDLERS);
