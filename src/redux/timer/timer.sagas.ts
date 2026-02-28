import { put, takeLatest } from "redux-saga/effects";

import timerService from "~/services/TimerService";

import { actions } from "../";

function* handleStopTimer() {
  timerService.pause();
  const seconds = timerService.seconds;

  yield put(actions.timerStopped(seconds));
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
  yield takeLatest(actions.stopTimer, handleStopTimer);
  yield takeLatest(actions.resumeTimer, handleResumeTimer);
  yield takeLatest(actions.resetTimer, handleResetTimer);
}
