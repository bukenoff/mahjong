import { createSlice } from '@reduxjs/toolkit'

import type { TilePairsResolvedCountState } from '~/types'

import { actions } from '../'

const initial_state = 0 as TilePairsResolvedCountState

const tiles_pairs_resolved_count_slice = createSlice({
  name: 'tiles_pairs_resolved_count',
  initialState: initial_state,
  reducers: {
    tilePairsResolvedCountIncremented(state) {
      return state + 1
    },
    tilePairsResolvedCountDecremented(state) {
      return state - 1
    },
  },
  extraReducers(builder) {
    return builder.addCase(actions.newBoardGenerated, () => {
      return 0
    })
  },
})

export const {
  actions: tile_pairs_resolved_count_actions,
  reducer: tile_pairs_resolved_count_reducer,
} = tiles_pairs_resolved_count_slice
