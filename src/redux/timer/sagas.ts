import { put, takeLatest } from 'redux-saga/effects';
import { TimerActions } from '~/types';
import { timerStopped, timerResumed, timerReset } from './actions';
import timerService from '~/services/TimerService';

function* handleStopTimer() {
  timerService.pause();
  const seconds = timerService.seconds;

  yield put(timerStopped(seconds));
}

function* handleResumeTimer() {
  timerService.unpause();

  yield put(timerResumed());
}

function* handleResetTimer() {
  timerService.reset();

  yield put(timerReset());
}

export default function* timerFlow() {
  yield takeLatest(TimerActions.STOP_TIMER, handleStopTimer);
  yield takeLatest(TimerActions.RESUME_TIMER, handleResumeTimer);
  yield takeLatest(TimerActions.RESET_TIMER, handleResetTimer);
}
