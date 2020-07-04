import { createReducer } from '@reduxjs/toolkit';
import { ProcessingActions, ProcessingHandler, ProcessingState } from '~/types';
import { processingToggled } from './actions';

const initialState: ProcessingState = false;

const processingToggledHandler: ProcessingHandler<typeof processingToggled> = (
  state,
  { payload: { value } },
) => (
  state = value
);

export const HANDLERS = {
  [ProcessingActions.PROCESSING_TOGGLED]: processingToggledHandler,
};

export default createReducer(initialState, HANDLERS);
