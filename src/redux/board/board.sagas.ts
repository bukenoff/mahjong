import { put, select, takeEvery } from 'redux-saga/effects';
import { actions } from '../';
import { createBoard } from '~/logic/createBoard';
import { getType } from '@reduxjs/toolkit';
import { Board } from '~/types';
import { selectBoard } from './board.selectors';

export function* handleGenerateNewBoard() {
  const new_board = createBoard();

  yield put(actions.newBoardGenerated({ new_board }));
  yield put(actions.resetTimer());
  yield put(actions.resumeTimer());
}

export function* handleShuffleBoard() {
  const board: Board = yield select(selectBoard);
  // TODO: Implement shuffling
}

export default function* boardFlow() {
  yield takeEvery(getType(actions.generateNewBoard), handleGenerateNewBoard);
  yield takeEvery(getType(actions.shuffleBoard), handleGenerateNewBoard);
}
