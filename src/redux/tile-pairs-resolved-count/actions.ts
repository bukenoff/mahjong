import { createAction } from '@reduxjs/toolkit';

export const tilePairsResolvedCountIncremented = createAction(
  'TILE_PAIRS_RESOLVED_COUNT_INCREMENTED',
);

export const tilePairsResolvedCountDecremented = createAction(
  'TILE_PAIRS_RESOLVED_COUNT_DECREMENTED',
);
