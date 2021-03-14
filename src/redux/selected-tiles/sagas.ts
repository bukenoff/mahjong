import { put, takeEvery, select, call, delay } from 'redux-saga/effects';
import {
  Tile,
  TileUpdate,
  TileCoordinatesPair,
  TileCoordinates,
} from '~/types';
import { selectStack } from './selectors';
import { selectProcessing } from '../processing/selectors';
import { selectTileFromBoard } from '../board/selectors';
import { getType } from '@reduxjs/toolkit';
import { actions } from '../';

function* unselectTiles(first_tile: Tile, second_tile: Tile) {
  const update: TileUpdate = {
    is_selected: false,
  };

  const coordinates: TileCoordinatesPair = [
    first_tile.coordinates,
    second_tile.coordinates,
  ];

  yield put(actions.multipleTilesUpdated({ coordinates, update }));
}

function* resolveTiles(first_tile: Tile, second_tile: Tile) {
  const update: TileUpdate = {
    is_blocked: false,
  };

  const tiles_to_update_coordinates: TileCoordinates[] = [];
  const all_unblocks = [];

  if (first_tile.unblocks) {
    all_unblocks.push(...first_tile.unblocks);
  }

  if (second_tile.unblocks) {
    all_unblocks.push(...second_tile.unblocks);
  }

  for (const coordinates of all_unblocks) {
    const { layer, row, col } = coordinates;
    const tile: ReturnType<typeof selectTileFromBoard> = yield select(
      selectTileFromBoard,
      layer,
      row,
      col,
    );

    if (tile) {
      tiles_to_update_coordinates.push(coordinates);
    }
  }

  if (tiles_to_update_coordinates.length) {
    yield put(
      actions.multipleTilesUpdated({
        coordinates: tiles_to_update_coordinates,
        update,
      }),
    );
  }

  const two_tiles_coordinates: TileCoordinatesPair = [
    first_tile.coordinates,
    second_tile.coordinates,
  ];

  yield put(actions.stepAddedToStack({ tile_pair: [first_tile, second_tile] }));
  yield put(actions.twoTilesRemoved({ coordinates: two_tiles_coordinates }));
  yield put(actions.stepIndexIncremented());
  yield put(actions.stepsMadeIncremented());
}

function* handleSelectTile({
  payload: { tile },
}: ReturnType<typeof actions.selectTile>) {
  const processing: ReturnType<typeof selectProcessing> = yield select(
    selectProcessing,
  );

  if (processing) {
    return null;
  }

  yield put(actions.processingToggled({ value: true }));
  yield put(actions.tileAddedToStack({ tile }));

  const stack: ReturnType<typeof selectStack> = yield select(selectStack);

  yield put(
    actions.tileUpdated({
      coordinates: tile.coordinates,
      update: { is_selected: true },
    }),
  );

  if (stack.length === 2) {
    // once we have two tiles selected
    // compare them
    const [first_tile, second_tile] = stack;

    yield delay(500);

    if (first_tile.icon === second_tile.icon) {
      // if both tiles have the same icon
      // remove them, and unblock the tiles that
      // were blocked by them
      yield call(resolveTiles, first_tile, second_tile);
    } else {
      // if tiles do not have the same icon
      // unselect them
      // clear the stack
      yield call(unselectTiles, first_tile, second_tile);
    }

    yield put(actions.stackCleared());
  }

  yield put(actions.processingToggled({ value: false }));
}

export default function* selectedTileActionsFlow() {
  yield takeEvery(getType(actions.selectTile), handleSelectTile);
}
