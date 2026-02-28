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

const initial_state = null as BoardState

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

      if (!state) return state

      if (!state[layer] && !state[layer]?.[row]?.[col]) {
        return state
      }

      state[layer][row][col] = {
        ...(state[layer][row][col] as Tile),
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
        if (!state) return state

        if (!state[layer]?.[row]?.[col]) {
          return state
        }

        state[layer][row][col] = {
          ...(state[layer][row][col] as Tile),
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
        if (!state) return state

        if (!state[layer]?.[row]?.[col]) {
          return state
        }

        state[layer][row][col] = null
      }
    },
    newBoardGenerated(_state: Draft<BoardState>, action: PayloadAction<Board>) {
      return action.payload
    },
    multipleTilesRestored(
      state: Draft<BoardState>,
      action: PayloadAction<[Tile, Tile]>
    ) {
      const tile_pair = action.payload

      if (!state) return state

      for (const tile of tile_pair) {
        const {
          coordinates: { layer, row, col },
        } = tile

        state[layer][row][col] = tile
      }
    },
    shuffleBoard(state: Draft<BoardState>) {
      return state
    },
    boardShuffled(_state: Draft<BoardState>, action: PayloadAction<Board>) {
      return action.payload
    },
  },
})

export const { actions: board_actions, reducer: board_reducer } = board_slice
