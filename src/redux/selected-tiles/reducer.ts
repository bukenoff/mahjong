import { createReducer } from '@reduxjs/toolkit';
import { SelectedTilesActions, SelectedTilesHandler, SelectedTilesState } from '~/types';
import { tileAddedToStack } from './actions';

const initialState: SelectedTilesState = {
  stack: [],
};

const tileAddedToStackHandler: SelectedTilesHandler<typeof tileAddedToStack> = (
  state,
  { payload: { tile } },
) => {
  state.stack.push(tile);
};

const stackClearedHandler: SelectedTilesHandler = (
  state,
) => {
  state.stack = [];
};

export const HANDLERS = {
  [SelectedTilesActions.TILE_ADDED_TO_STACK]: tileAddedToStackHandler,
  [SelectedTilesActions.STACK_CLEARED]: stackClearedHandler,
};

export default createReducer(initialState, HANDLERS);
