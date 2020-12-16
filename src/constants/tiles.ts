import { CSSProperties } from 'react';
import { TileCoordinates } from '~/types';

export const ICON_SYMBOL_REPEAT_COUNT = 4;

export const TOTAL_TILE_COUNT = 144;

export const TILE_SYMBOLS_COUNT = 36;

export const LAYERS_COUNT = 5;

export interface SpecialTilesMap {
  [row: number]: {
    [layer: number]: {
      [col: number]: boolean;
    };
  };
}

export const SPECIAL_TILES: SpecialTilesMap = {
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

export interface SpecialTilesUnblocksMap {
  [layer: number]: {
    [row: number]: {
      [col: number]: TileCoordinates[];
    };
  };
}

export const SPECIAL_TILES_UNBLOCKS: SpecialTilesUnblocksMap = {
  0: {
    3: {
      0: [
        { layer: 0, row: 3, col: 1 },
        { layer: 0, row: 4, col: 1 },
      ],
      13: [
        { layer: 0, row: 3, col: 12 },
        { layer: 0, row: 4, col: 12 },
      ],
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

export interface SpecialStylesMap {
  [row: number]: {
    [layer: number]: {
      [col: number]: CSSProperties;
    };
  };
}

export const SPECIAL_TILES_STYLES: SpecialStylesMap = {
  0: {
    3: {
      0: { transform: 'translate(0, 32px)' },
      13: { transform: 'translate(0, 32px)' },
      14: { transform: 'translate(0, 32px)' },
    },
  },
  4: {
    3: {
      6: { transform: 'translate(20px, 32px)' },
    },
  },
};
