import { put, takeEvery } from 'redux-saga/effects';
import { newBoardGenerated, generateNewBoard } from './slice';
import { createBoard } from '~/logic/createBoard';
import { resetTimer, resumeTimer } from '../timer/slice';
import { getType } from '@reduxjs/toolkit';

export function* handleGenerateNewBoard() {
  const new_board = createBoard();

  yield put(newBoardGenerated({ new_board }));
  yield put(resetTimer());
  yield put(resumeTimer());
}

export default function* boardFlow() {
  yield takeEvery(getType(generateNewBoard), handleGenerateNewBoard);
}
