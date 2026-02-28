import { all, fork } from 'redux-saga/effects'

import boardFlow from './board/board.sagas'
import selectedTilesFlow from './selected-tiles/selected-tiles.sagas'
import stepsFlow from './steps/steps.sagas'
import timerFlow from './timer/timer.sagas'

export default function* rootSaga() {
  yield all([
    fork(boardFlow),
    fork(selectedTilesFlow),
    fork(stepsFlow),
    fork(timerFlow),
  ])
}
