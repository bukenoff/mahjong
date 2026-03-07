import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { SelectedTilesState, Tile } from '../../types'
import { board_actions } from '../board/board.slice'

const initial_state = {
  stack: [],
} as SelectedTilesState

const selected_tiles_slice = createSlice({
  name: 'selected_tiles',
  initialState: initial_state,
  reducers: {
    tileAddedToStack(state, action) {
      const tile = action.payload

      state.stack.push(tile)
    },
    tileRemovedFromStack(state, action) {
      const tile = action.payload

      const tileIndex = state.stack.findIndex(
        (current) => current.id === tile.id
      )
      state.stack.splice(tileIndex, 1)
    },

    stackCleared(state) {
      state.stack = []
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selectTile(state, _: PayloadAction<Tile>) {
      return state
    },
  },
  extraReducers(builder) {
    return builder.addCase(board_actions.boardShuffled, (state) => {
      state.stack = []
    })
  },
})

export const {
  actions: selected_tiles_actions,
  reducer: selected_tiles_reducer,
} = selected_tiles_slice
