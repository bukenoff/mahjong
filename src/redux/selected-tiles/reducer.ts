import { createReducer } from '@reduxjs/toolkit';
import { SelectedTilesActions, SelectedTilesHandler, SelectedTilesState } from '~/types';
import { tileAddedToStack } from './actions';

const initialState: SelectedTilesState = {
  stack: [],
};

const handleTileAddedToStack: SelectedTilesHandler<typeof tileAddedToStack> = (
  state,
  { payload: { tile } },
) => {
  state.stack.push(tile);
};

const handleStackCleared: SelectedTilesHandler = (
  state,
) => {
  state.stack = [];
};

export const HANDLERS = {
  [SelectedTilesActions.TILE_ADDED_TO_STACK]: handleTileAddedToStack,
  [SelectedTilesActions.STACK_CLEARED]: handleStackCleared,
};

export default createReducer(initialState, HANDLERS);
