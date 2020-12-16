import { StepsActions, Tile } from '~/types';
import { createAction } from '@reduxjs/toolkit';

export const takeStepBack = createAction(StepsActions.TAKE_STEP_BACK);

export const takeStepForward = createAction(StepsActions.TAKE_STEP_FORWARD);

export const stepBackTaken = createAction(StepsActions.STEP_BACK_TAKEN);

export const stepForwardTaken = createAction(StepsActions.STEP_FORWARD_TAKEN);

export const stepIndexIncremented = createAction(
  StepsActions.STEP_INDEX_INCREMENTED,
);

export const stepIndexDecremented = createAction(
  StepsActions.STEP_INDEX_DECREMENTED,
);

export const stepAddedToStack = createAction(
  StepsActions.STEP_ADDED_TO_STACK,
  (tile_pair: [Tile, Tile]) => ({
    payload: {
      tile_pair,
    },
  }),
);
