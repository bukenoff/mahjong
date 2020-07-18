import { put, takeLatest } from 'redux-saga/effects';
import { TimerActions } from '~/types';
import { timerStopped, timerResumed } from './actions';
import timerService from '~/services/TimerService';

function* handleStopTimer() {
  timerService.pause();

  yield put(timerStopped());
}

function* handleResumeTimer() {
  timerService.unpause();

  yield put(timerResumed());
}

export default function* timerFlow() {
  yield takeLatest(TimerActions.STOP_TIMER, handleStopTimer);
  yield takeLatest(TimerActions.RESUME_TIMER, handleResumeTimer);
}
