import { TileCoordinates } from '~/types';

const ICON_SYMBOL_REPEAT_COUNT = 4;

const TOTAL_TILE_COUNT = 144;

const TILE_SYMBOLS_COUNT = 36;

const LAYERS_COUNT = 5;

const SPECIAL_TILES = {
  0: {
    3: {
      0: true,
      13: true,
    },
  },
  4: {
    3: {
      6: true,
    },
  },
};

interface SpecialTilesUnblocksMap {
  [layer: number]: {
    [row: number]: {
      [col: number]: TileCoordinates[],
    }
  }
}

const SPECIAL_TILES_UNBLOCKS: SpecialTilesUnblocksMap = {
  0: {
    3: {
      0: [{ layer: 0, row: 3, col: 1 }, { layer: 0, row: 4, col: 1 }],
      13: [{ layer: 0, row: 3, col: 12 }, { layer: 0, row: 4, col: 12 }],
    },
  },
  4: {
    3: {
      6: [
        { layer: 3, row: 3, col: 6 },
        { layer: 3, row: 3, col: 7 },
        { layer: 3, row: 4, col: 6 },
        { layer: 3, row: 4, col: 7 },
      ],
    },
  },
};

const SPECIAL_TILES_STYLES = {
  0: {
    3: {
      0: { transform: 'translate(0, 40px)' },
      13: { transform: 'translate(0, 40px)' },
      14: { transform: 'translate(0, 40px)' },
    },
  },
  4: {
    3: {
      6: { transform: 'translate(25px, 40px)' },
    },
  },
};

export {
  ICON_SYMBOL_REPEAT_COUNT,
  TILE_SYMBOLS_COUNT,
  TOTAL_TILE_COUNT,
  LAYERS_COUNT,
  SPECIAL_TILES,
  SPECIAL_TILES_UNBLOCKS,
  SPECIAL_TILES_STYLES,
};
