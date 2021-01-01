import { put, takeEvery } from 'redux-saga/effects';
import { newBoardGenerated, generateNewBoard } from './actions';
import { createBoard } from '~/logic/createBoard';
import { resetTimer, resumeTimer } from '../timer/actions';
import { getType } from '@reduxjs/toolkit';

function* handleGenerateNewBoard() {
  const new_board = createBoard();

  yield put(newBoardGenerated(new_board));
  yield put(resetTimer());
  yield put(resumeTimer());
}

export default function* boardFlow() {
  yield takeEvery(getType(generateNewBoard), handleGenerateNewBoard);
}
