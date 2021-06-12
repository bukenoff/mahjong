import { put, takeLatest } from 'redux-saga/effects';
import { actions } from '../';
import timerService from '~/services/TimerService';
import { getType } from '@reduxjs/toolkit';

function* handleStopTimer() {
  timerService.pause();
  const seconds = timerService.seconds;

  yield put(actions.timerStopped({ seconds }));
}

function* handleResumeTimer() {
  timerService.unpause();

  yield put(actions.timerResumed());
}

function* handleResetTimer() {
  timerService.reset();

  yield put(actions.timerReset());
}

export default function* timerFlow() {
  yield takeLatest(getType(actions.stopTimer), handleStopTimer);
  yield takeLatest(getType(actions.resumeTimer), handleResumeTimer);
  yield takeLatest(getType(actions.resetTimer), handleResetTimer);
}
