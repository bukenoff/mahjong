import { fork } from 'redux-saga/effects';
import selectedTilesFlow from './selected-tiles/sagas';
import boardFlow from './board/sagas';

export default function* rootSaga() {
  yield fork(selectedTilesFlow);
  yield fork(boardFlow);
}
