import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Draft } from 'immer'
import type {
  BoardState,
  Tile,
  TileUpdate,
  TileCoordinates,
  TileCoordinatesPair,
  Board,
} from '../../types'

const initial_state = { value: null } as BoardState

const board_slice = createSlice({
  name: 'board',
  initialState: initial_state,
  reducers: {
    generateNewBoard(state: Draft<BoardState>) {
      return state
    },
    tileUpdated(
      state: Draft<BoardState>,
      action: PayloadAction<{
        coordinates: Tile['coordinates']
        update: TileUpdate
      }>
    ) {
      const { layer, row, col } = action.payload.coordinates
      const { update } = action.payload

      if (!state.value) return state

      if (!state.value[layer] && !state.value[layer]?.[row]?.[col]) {
        return state
      }

      state.value[layer][row][col] = {
        ...(state.value[layer][row][col] as Tile),
        ...update,
      }
    },
    multipleTilesUpdated(
      state: Draft<BoardState>,
      action: PayloadAction<{
        coordinates: TileCoordinates[]
        update: TileUpdate
      }>
    ) {
      const { coordinates, update } = action.payload

      for (const { layer, row, col } of coordinates) {
        if (!state.value) return state

        if (!state.value[layer]?.[row]?.[col]) {
          return state
        }

        state.value[layer][row][col] = {
          ...(state.value[layer][row][col] as Tile),
          ...update,
        }
      }
    },
    twoTilesRemoved(
      state: Draft<BoardState>,
      action: PayloadAction<TileCoordinatesPair>
    ) {
      const coordinates = action.payload

      for (const { layer, row, col } of coordinates) {
        if (!state.value) return state

        if (!state.value[layer]?.[row]?.[col]) {
          return state
        }

        state.value[layer][row][col] = null
      }
    },
    newBoardGenerated(state: Draft<BoardState>, action: PayloadAction<Board>) {
      state.value = action.payload
    },
    multipleTilesRestored(
      state: Draft<BoardState>,
      action: PayloadAction<[Tile, Tile]>
    ) {
      const tile_pair = action.payload

      if (!state.value) return state

      for (const tile of tile_pair) {
        const {
          coordinates: { layer, row, col },
        } = tile

        state.value[layer][row][col] = tile
      }
    },
    shuffleBoard(state: Draft<BoardState>) {
      return state
    },
    boardShuffled(state: Draft<BoardState>, action: PayloadAction<Board>) {
      state.value = action.payload
    },
  },
})

export const { actions: board_actions, reducer: board_reducer } = board_slice
