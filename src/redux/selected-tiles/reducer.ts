import { createReducer } from '@reduxjs/toolkit';
import { SelectedTilesActions, SelectedTilesHandler, SelectedTilesState } from '~/types';
import { addTileToStack } from './actions';

const initialState: SelectedTilesState = {
  stack: [],
};

const addTileToStackHandler: SelectedTilesHandler<typeof addTileToStack> = (
  state,
  { tile },
) => ({
  stack: [...state.stack, tile],
});

const removeTilesFromStackHandler: SelectedTilesHandler = (
  state,
) => ({
  stack: [],
});

export const HANDLERS = {
  [SelectedTilesActions.ADD_TILE_TO_STACK]: addTileToStackHandler,
  [SelectedTilesActions.REMOVE_TILES_FROM_STACK]: removeTilesFromStackHandler,
};

export default createReducer(initialState, HANDLERS);
