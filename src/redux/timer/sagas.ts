import { put, takeLatest } from 'redux-saga/effects';
import { TimerActions } from '~/types';
import { timerStopped, timerResumed } from './actions';

function* handleStopTimer() {
  // [-] do side effect to our timer service
  // [+] dispatch action to change state
  yield put(timerStopped());
}

function* handleResumeTimer() {
  // [-] do side effect to our timer service
  // [+] dispatch action to change state
  yield put(timerResumed());
}

export default function* timerFlow() {
  yield takeLatest(TimerActions.STOP_TIMER, handleStopTimer);
  yield takeLatest(TimerActions.RESUME_TIMER, handleResumeTimer);
}
