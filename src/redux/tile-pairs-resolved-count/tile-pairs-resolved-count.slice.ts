/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createSlice,
  type CaseReducer,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { TilePairsResolvedCountState } from "~/types";
import { actions } from "../";

const initial_state: TilePairsResolvedCountState = 0;

type TilePairsResolvedCountReducer<T = undefined> = T extends undefined
  ? (state: TilePairsResolvedCountState) => void
  : CaseReducer<TilePairsResolvedCountState, PayloadAction<T>>;

const tiles_pairs_resolved_count_slice = createSlice<
  TilePairsResolvedCountState,
  {
    tilePairsResolvedCountIncremented: TilePairsResolvedCountReducer;
    tilePairsResolvedCountDecremented: TilePairsResolvedCountReducer;
  }
>({
  name: "tiles_pairs_resolved_count",
  initialState: initial_state,
  reducers: {
    tilePairsResolvedCountIncremented(state) {
      state += 1;
    },
    tilePairsResolvedCountDecremented(state) {
      state += 1;
    },
  },
  extraReducers(builder) {
    return builder.addCase(actions.newBoardGenerated, (state) => {
      return 0;
    });
  },
});

export const {
  actions: tile_pairs_resolved_count_actions,
  reducer: tile_pairs_resolved_count_reducer,
} = tiles_pairs_resolved_count_slice;
