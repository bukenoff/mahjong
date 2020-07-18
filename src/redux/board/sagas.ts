import { put, takeEvery } from 'redux-saga/effects';
import { BoardActions } from '~/types';
import { newBoardGenerated } from './actions';
import { createBoard } from '~/logic/createBoard';
import { resetTimer } from '../timer/actions';

function* handleGenerateNewBoard(){
  const new_board = createBoard();

  yield put(newBoardGenerated(new_board));
  yield put(resetTimer());
}

export default function* boardFlow() {
  yield takeEvery(BoardActions.GENERATE_NEW_BOARD, handleGenerateNewBoard);
}
