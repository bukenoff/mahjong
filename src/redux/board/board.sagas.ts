import { put, select, takeEvery, call } from 'redux-saga/effects';
import { getType } from '@reduxjs/toolkit';
import cloneDeep from 'lodash.clonedeep';
import {
  collectUnresolvedTilesCoordinates,
  createBoard,
  shuffleBoard,
} from '~/logic/board';
import type { Board } from '~/types';
import { actions, selectBoard } from '../';

export function* handleGenerateNewBoard() {
  const new_board = createBoard();

  yield put(actions.newBoardGenerated(new_board));
  yield put(actions.resetTimer());
  yield put(actions.resumeTimer());
}

export function* handleShuffleBoard() {
  const board: Board = yield select(selectBoard);
  const all_tiles = collectUnresolvedTilesCoordinates(board);

  const shuffled_copy: Board = yield call(
    shuffleBoard,
    board,
    cloneDeep(board),
    all_tiles,
  );

  yield put(actions.boardShuffled(shuffled_copy));
}

export default function* boardFlow() {
  yield takeEvery(getType(actions.generateNewBoard), handleGenerateNewBoard);
  yield takeEvery(getType(actions.shuffleBoard), handleShuffleBoard);
}
