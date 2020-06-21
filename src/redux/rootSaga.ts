import { fork } from 'redux-saga/effects';
import selectedTilesFlow from './selected-tiles/sagas';

export default function* rootSaga() {
  yield fork(selectedTilesFlow);
}
