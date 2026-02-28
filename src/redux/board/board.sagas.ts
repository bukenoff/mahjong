import { put, select, call, takeLatest } from 'redux-saga/effects'
import cloneDeep from 'lodash.clonedeep'
import {
  collectUnresolvedTilesCoordinates,
  createBoard,
  shuffleBoard,
} from '~/logic/board'
import type { Board } from '~/types'
import { actions, selectBoard } from '../'

export function* handleGenerateNewBoard() {
  const new_board: Board = yield call(createBoard)

  yield put(actions.newBoardGenerated(new_board))
  yield put(actions.resetTimer())
  yield put(actions.resumeTimer())
}

export function* handleShuffleBoard() {
  const board: Board = yield select(selectBoard)
  const all_tiles = collectUnresolvedTilesCoordinates(board)

  const shuffled_copy: Board = yield call(
    shuffleBoard,
    board,
    cloneDeep(board),
    all_tiles
  )

  yield put(actions.boardShuffled(shuffled_copy))
}

export default function* boardFlow() {
  yield takeLatest(actions.generateNewBoard, handleGenerateNewBoard)
  yield takeLatest(actions.shuffleBoard, handleShuffleBoard)
}
