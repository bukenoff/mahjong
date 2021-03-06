import { put, takeLatest, select } from 'redux-saga/effects';
import { actions } from '../';
import { getType } from '@reduxjs/toolkit';
import { selectStepIndex, selectStepStack } from './steps.selectors';

function* handleTakeStepBack() {
  const step_index: ReturnType<typeof selectStepIndex> = yield select(
    selectStepIndex,
  );
  const steps_stack: ReturnType<typeof selectStepStack> = yield select(
    selectStepStack,
  );

  if (steps_stack.length === 0) return;

  const [first_tile, second_tile] = steps_stack[step_index];

  yield put(
    actions.multipleTilesRestored({
      tile_pair: [first_tile, second_tile],
    }),
  );
  yield put(actions.stepBackTaken());
  yield put(actions.stepIndexDecremented());
}

function* handleTakeStepForward() {
  const step_index: ReturnType<typeof selectStepIndex> = yield select(
    selectStepIndex,
  );
  const steps_stack: ReturnType<typeof selectStepStack> = yield select(
    selectStepStack,
  );

  if (steps_stack.length === 0) return;

  const [first_tile, second_tile] = steps_stack[step_index + 1];

  yield put(
    actions.twoTilesRemoved({
      coordinates: [first_tile.coordinates, second_tile.coordinates],
    }),
  );
  yield put(actions.stepForwardTaken());
  yield put(actions.stepIndexIncremented());
}

export default function* stepsFlow() {
  yield takeLatest(getType(actions.takeStepBack), handleTakeStepBack);
  yield takeLatest(getType(actions.takeStepForward), handleTakeStepForward);
}
