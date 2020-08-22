import { put, takeEvery, select, call, delay } from 'redux-saga/effects';
import { SelectedTilesActions, Tile, TileUpdate, TileCoordinatesPair } from '~/types';
import { selectTile, tileAddedToStack, stackCleared } from './actions';
import { selectStack } from './selectors';
import { tileUpdated, twoTilesRemoved, multipleTilesUpdated } from '../board/actions';
import { processingToggled } from '../processing/actions';
import { selectProcessing } from '../processing/selectors';
import { selectTileFromBoard } from '../board/selectors';

function* unselectTiles(first_tile: Tile, second_tile: Tile) {
  const update: TileUpdate = {
    is_selected: false,
  };

  const two_tiles_coordinates: TileCoordinatesPair = [
    first_tile.coordinates,
    second_tile.coordinates,
  ];

  yield put(multipleTilesUpdated(
    two_tiles_coordinates,
    update,
  ));
}

function* resolveTiles(first_tile: Tile, second_tile: Tile) {
  const update: TileUpdate = {
    is_blocked: false,
  };

  const tiles_to_update_coordinates = [];
  const all_unblocks = [...first_tile.unblocks, ...second_tile.unblocks];

  for (const coordinates of all_unblocks) {
    const { layer, row, col } = coordinates;
    const tile: ReturnType<typeof selectTileFromBoard> = yield select(selectTileFromBoard, layer, row, col);

    if (tile) {
      tiles_to_update_coordinates.push(coordinates);
    }
  }

  if (tiles_to_update_coordinates.length) {
    yield put(multipleTilesUpdated(tiles_to_update_coordinates, update));
  }

  const two_tiles_coordinates: TileCoordinatesPair = [
    first_tile.coordinates,
    second_tile.coordinates,
  ];

  yield put(twoTilesRemoved(two_tiles_coordinates));
}

function* handleSelectTile({ payload: { tile }}: ReturnType<typeof selectTile>) {
  const processing: ReturnType<typeof selectProcessing> = yield select(selectProcessing);

  if (processing) {
    return null;
  }

  yield put(processingToggled(true));
  yield put(tileAddedToStack(tile));

  const stack: ReturnType<typeof selectStack> = yield select(selectStack);

  yield put(tileUpdated(tile.coordinates, { is_selected: true }));

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

    yield put(stackCleared());
  }

  yield put(processingToggled(false));
}

export default function* selectedTileActionsFlow() {
  yield takeEvery(SelectedTilesActions.SELECT_TILE, handleSelectTile);
}
