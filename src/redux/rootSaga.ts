import { fork } from 'redux-saga/effects';
import selectedTilesFlow from './selected-tiles/sagas';
import boardFlow from './board/sagas';
import timerFlow from './timer/sagas';
import stepsFlow from './steps/sagas';

export default function* rootSaga() {
  yield fork(selectedTilesFlow);
  yield fork(boardFlow);
  yield fork(timerFlow);
  yield fork(stepsFlow);
}
