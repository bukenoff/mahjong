import { put, takeLatest, select } from 'redux-saga/effects'

import { selectPlayerName, selectStepIndex, selectStepStack, actions } from '..'
import timerService from '../../services/TimerService'
import type { GameState } from '../../types'

function* handleTakeStepBack() {
  const step_index: ReturnType<typeof selectStepIndex> = yield select(
    selectStepIndex
  )
  const steps_stack: ReturnType<typeof selectStepStack> = yield select(
    selectStepStack
  )

  if (steps_stack.length === 0) return

  const [first_tile, second_tile] = steps_stack[step_index]

  yield put(actions.multipleTilesRestored([first_tile, second_tile]))
  yield put(actions.stepBackTaken())
  yield put(actions.stepIndexDecremented())
}

function* handleTakeStepForward() {
  const step_index: ReturnType<typeof selectStepIndex> = yield select(
    selectStepIndex
  )
  const steps_stack: ReturnType<typeof selectStepStack> = yield select(
    selectStepStack
  )

  if (steps_stack.length === 0) return

  const [first_tile, second_tile] = steps_stack[step_index + 1]

  yield put(
    actions.twoTilesRemoved([first_tile.coordinates, second_tile.coordinates])
  )
  yield put(actions.stepForwardTaken())
  yield put(actions.stepIndexIncremented())
}

function* handleStepIndexIncremented() {
  const stepIndex: ReturnType<typeof selectStepIndex> = yield select(
    selectStepIndex
  )

  if (stepIndex === 71) {
    const time = timerService.seconds
    const name: GameState['player_name'] = yield select(selectPlayerName)

    yield put(actions.gameStopped(time))
    yield put(actions.scoreAdded({ name, time }))
  }
}

export default function* stepsFlow() {
  yield takeLatest(actions.takeStepBack, handleTakeStepBack)
  yield takeLatest(actions.takeStepForward, handleTakeStepForward)
  yield takeLatest(actions.stepIndexIncremented, handleStepIndexIncremented)
}
