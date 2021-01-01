import { Tile } from '~/types';
import { createAction } from '@reduxjs/toolkit';

export const takeStepBack = createAction('steps/take_step_back');

export const takeStepForward = createAction('steps/take_step_forward');

export const stepBackTaken = createAction('steps/step_back_taken');

export const stepForwardTaken = createAction('steps/step_forward_taken');

export const stepIndexIncremented = createAction(
  'steps/step_index_incremented',
);

export const stepIndexDecremented = createAction(
  'steps/step_index_decremented',
);

export const stepsMadeIncremented = createAction(
  'steps/steps_made_incremented',
);

export const stepAddedToStack = createAction(
  'steps/step_added_to_stack',
  (tile_pair: [Tile, Tile]) => ({
    payload: {
      tile_pair,
    },
  }),
);
