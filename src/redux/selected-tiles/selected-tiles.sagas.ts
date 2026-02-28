import { put, takeEvery, select, call, delay } from 'redux-saga/effects'
import type {
  Tile,
  TileUpdate,
  TileCoordinatesPair,
  TileCoordinates,
} from '../../types'

import { selectStack, selectTileFromBoard, actions } from '..'

function* unselectTiles(first_tile: Tile, second_tile: Tile) {
  const update: TileUpdate = {
    is_selected: false,
  }

  const coordinates: TileCoordinatesPair = [
    first_tile.coordinates,
    second_tile.coordinates,
  ]

  yield put(actions.multipleTilesUpdated({ coordinates, update }))
}

function* resolveTiles(first_tile: Tile, second_tile: Tile) {
  const update: TileUpdate = {
    is_blocked: false,
  }

  const tiles_to_update_coordinates: TileCoordinates[] = []
  const all_unblocks = []

  if (first_tile.unblocks) {
    all_unblocks.push(...first_tile.unblocks)
  }

  if (second_tile.unblocks) {
    all_unblocks.push(...second_tile.unblocks)
  }

  for (const coordinates of all_unblocks) {
    const { layer, row, col } = coordinates
    const tile: ReturnType<typeof selectTileFromBoard> = yield select(
      selectTileFromBoard,
      layer,
      row,
      col
    )

    if (tile) {
      tiles_to_update_coordinates.push(coordinates)
    }
  }

  if (tiles_to_update_coordinates.length) {
    yield put(
      actions.multipleTilesUpdated({
        coordinates: tiles_to_update_coordinates,
        update,
      })
    )
  }

  const two_tiles_coordinates: TileCoordinatesPair = [
    first_tile.coordinates,
    second_tile.coordinates,
  ]

  yield put(actions.stepAddedToStack([first_tile, second_tile]))
  yield put(actions.twoTilesRemoved(two_tiles_coordinates))
  yield put(actions.stepIndexIncremented())
  yield put(actions.stepsMadeIncremented())
}

function* handleSelectTile({ payload }: ReturnType<typeof actions.selectTile>) {
  const tile = payload

  yield put(actions.tileAddedToStack(tile))
  yield put(
    actions.tileUpdated({
      coordinates: tile.coordinates,
      update: { is_selected: true },
    })
  )

  const stack: ReturnType<typeof selectStack> = yield select(selectStack)

  if (stack.length === 2) {
    const [first_tile, second_tile] = stack

    yield delay(500)

    if (first_tile.icon === second_tile.icon) {
      yield call(resolveTiles, first_tile, second_tile)
    } else {
      yield call(unselectTiles, first_tile, second_tile)
    }

    yield put(actions.stackCleared())
  }
}

export default function* selectedTilesFlow() {
  yield takeEvery(actions.selectTile, handleSelectTile)
}
