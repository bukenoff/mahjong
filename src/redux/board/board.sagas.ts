import { put, takeEvery } from 'redux-saga/effects';
import { actions } from '../';
import { createBoard } from '~/logic/createBoard';
import { getType } from '@reduxjs/toolkit';

export function* handleGenerateNewBoard() {
  const new_board = createBoard();

  yield put(actions.newBoardGenerated({ new_board }));
  yield put(actions.resetTimer());
  yield put(actions.resumeTimer());
}

export default function* boardFlow() {
  yield takeEvery(getType(actions.generateNewBoard), handleGenerateNewBoard);
}
