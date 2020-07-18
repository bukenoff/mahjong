import { fork, put } from 'redux-saga/effects';
import selectedTilesFlow from './selected-tiles/sagas';
import boardFlow from './board/sagas';
import timerFlow from './timer/sagas';
import { generateNewBoard } from './board/actions';

function* initializeSaga() {
  yield put(generateNewBoard());
}

export default function* rootSaga() {
  yield fork(initializeSaga);
  yield fork(selectedTilesFlow);
  yield fork(boardFlow);
  yield fork(timerFlow);
}
