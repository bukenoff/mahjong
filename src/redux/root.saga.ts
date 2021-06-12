import { fork } from 'redux-saga/effects';
import selectedTilesFlow from './selected-tiles/selected-tiles.sagas';
import boardFlow from './board/board.sagas';
import timerFlow from './timer/timer.sagas';
import stepsFlow from './steps/steps.sagas';

export default function* rootSaga() {
  yield fork(selectedTilesFlow);
  yield fork(boardFlow);
  yield fork(timerFlow);
  yield fork(stepsFlow);
}
