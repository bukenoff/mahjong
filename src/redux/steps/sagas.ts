import { put, takeLatest, select } from 'redux-saga/effects';
import {
  takeStepBack,
  takeStepForward,
  stepBackTaken,
  stepForwardTaken,
  stepIndexDecremented,
  stepIndexIncremented,
} from './actions';
import { getType } from '@reduxjs/toolkit';
import { selectStepIndex, selectStepStack } from './selectors';
import { twoTilesRemoved, multipleTilesRestored } from '../board/slice';

function* handleTakeStepBack() {
  const step_index: ReturnType<typeof selectStepIndex> = yield select(
    selectStepIndex,
  );
  const steps_stack: ReturnType<typeof selectStepStack> = yield select(
    selectStepStack,
  );

  if (steps_stack.length === 0) return;

  const [first_tile, second_tile] = steps_stack[step_index];

  yield put(multipleTilesRestored({ tile_pair: [first_tile, second_tile] }));
  yield put(stepBackTaken());
  yield put(stepIndexDecremented());
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
    twoTilesRemoved({
      coordinates: [first_tile.coordinates, second_tile.coordinates],
    }),
  );
  yield put(stepForwardTaken());
  yield put(stepIndexIncremented());
}

export default function* stepsFlow() {
  yield takeLatest(getType(takeStepBack), handleTakeStepBack);
  yield takeLatest(getType(takeStepForward), handleTakeStepForward);
}
