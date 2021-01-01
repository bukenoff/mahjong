import { put, takeLatest } from 'redux-saga/effects';
import {
  timerStopped,
  timerResumed,
  timerReset,
  stopTimer,
  resetTimer,
  resumeTimer,
} from './actions';
import timerService from '~/services/TimerService';
import { getType } from '@reduxjs/toolkit';

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
  yield takeLatest(getType(stopTimer), handleStopTimer);
  yield takeLatest(getType(resumeTimer), handleResumeTimer);
  yield takeLatest(getType(resetTimer), handleResetTimer);
}
