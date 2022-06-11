import { LAYERS_ROWS_SCHEMES, LayersRowsSchemeType } from '~/constants/rows';
import {
  LAYERS_COUNT,
  SPECIAL_TILES,
  SPECIAL_TILES_UNBLOCKS,
  SPECIAL_TILES_STYLES,
} from '~/constants/tiles';
import { uuid } from 'uuidv4';
import type {
  Row,
  Board,
  Layer,
  TileCoordinates,
  RowScheme,
  Tile,
} from '~/types';
import { TilesSymbols } from '~/types';
import { shuffleArray, isEmptyObject } from './utils';

export const getBlockedStatus = (
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col'],
  open_tiles_indexes: number[],
): boolean => {
  if (layer === 0 && row === 4) {
    return true;
  }

  if (layer === 3) {
    return true;
  }

  return !open_tiles_indexes.includes(col);
};

export const getSpecialStyles = (
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col'],
) => {
  return SPECIAL_TILES_STYLES[layer][row][col];
};

export const hasSpecialStyles = (
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col'],
): boolean => {
  if (!SPECIAL_TILES_STYLES[layer]) {
    return false;
  }

  if (!SPECIAL_TILES_STYLES[layer][row]) {
    return false;
  }

  if (!SPECIAL_TILES_STYLES[layer][row][col]) {
    return false;
  }

  return true;
};

export const getSpecialUnblocks = (
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col'],
): TileCoordinates[] | null => {
  if (layer === 0 && row === 3 && col === 0) {
    return SPECIAL_TILES_UNBLOCKS[layer][row][col];
  }

  if (layer === 0 && row === 3 && col === 13) {
    return SPECIAL_TILES_UNBLOCKS[layer][row][col];
  }

  if (layer === 4 && row === 3 && col === 6) {
    return SPECIAL_TILES_UNBLOCKS[layer][row][col];
  }

  return null;
};

export const isTileSpecial = (
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col'],
): boolean => {
  if (!SPECIAL_TILES[layer]) {
    return false;
  }

  if (!SPECIAL_TILES[layer][row]) {
    return false;
  }

  if (!SPECIAL_TILES[layer][row][col]) {
    return false;
  }

  return true;
};

// collects coordinates of tiles that get unblocked
// if the tile with provided coordinates gets open
export const getUnblocks = (
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col'],
  open_tiles_indexes: number[],
): TileCoordinates[] => {
  if (open_tiles_indexes.indexOf(col) === 0) {
    return [{ layer, row, col: col + 1 }];
  }

  if (open_tiles_indexes.indexOf(col) === 1) {
    return [{ layer, row, col: col - 1 }];
  }

  return [
    {
      layer,
      row,
      col: col - 1,
    },
    {
      layer,
      row,
      col: col + 1,
    },
  ];
};

export const createRow = (
  row_scheme: RowScheme,
  row_index: number,
  layer_index: number,
  tile_symbols: any,
): Row => {
  const row: Row = {};

  const open_tiles_indexes = [
    Object.values(row_scheme).indexOf(true),
    Object.values(row_scheme).lastIndexOf(true),
  ];

  Object.values(row_scheme).forEach((t, i) => {
    if (!t) {
      return null;
    }

    const tile_is_special = isTileSpecial(layer_index, row_index, i);
    const tile_with_special_styles = hasSpecialStyles(
      layer_index,
      row_index,
      i,
    );
    const [icon] = tile_symbols.splice(tile_symbols.length - 1, 1);

    row[i] = {
      id: uuid(),
      is_blocked: getBlockedStatus(
        layer_index,
        row_index,
        i,
        open_tiles_indexes,
      ),
      is_selected: false,
      coordinates: {
        layer: layer_index,
        row: row_index,
        col: i,
      },
      icon,
      unblocks: tile_is_special
        ? getSpecialUnblocks(layer_index, row_index, i)
        : getUnblocks(layer_index, row_index, i, open_tiles_indexes),
      special_styles: tile_with_special_styles
        ? getSpecialStyles(layer_index, row_index, i)
        : null,
    };
  });

  return row;
};

export const createLayer = (
  layer_scheme: LayersRowsSchemeType[keyof LayersRowsSchemeType],
  layer_index: number,
  tile_symbols: any,
): Layer => {
  const rows: Layer = {};

  Object.values(layer_scheme).forEach((v, i) => {
    const new_row = createRow(v, i, layer_index, tile_symbols);

    if (isEmptyObject(new_row as Record<number, any>)) {
      return null;
    }

    rows[i] = new_row;
  });

  return rows;
};

export const createRandomlyOrderedTileSymbols = (): string[] => {
  const tile_symbols: string[] = [];

  for (const sym in TilesSymbols) {
    tile_symbols.push(sym);
    tile_symbols.push(sym);
    tile_symbols.push(sym);
    tile_symbols.push(sym);
  }

  const shuffled_tile_symbols = shuffleArray(tile_symbols);

  return shuffled_tile_symbols;
};

export const createBoard = (): Board => {
  const board: Board = {};
  const tile_symbols = createRandomlyOrderedTileSymbols();

  [...new Array(LAYERS_COUNT)].forEach((u, i) => {
    board[i] = createLayer(LAYERS_ROWS_SCHEMES[i], i, tile_symbols);
  });

  return board;
};

export const shuffleBoard = (
  board: Board,
  board_copy: Board,
  all_tiles: string[],
) => {
  let start = 0;
  let end = 1;

  try {
    while (end < all_tiles.length) {
      const [l1, r1, c1] = all_tiles[start].split('-');
      const [l2, r2, c2] = all_tiles[end].split('-');

      const first_tile_copy = board_copy[+l1][+r1][+c1];
      const second_tile_copy = board_copy[+l2][+r2][+c2];

      if (!!first_tile_copy) {
        first_tile_copy.coordinates = board[+l2][+r2][+c2]!.coordinates;
        first_tile_copy.unblocks = board[+l2][+r2][+c2]!.unblocks;
        first_tile_copy.is_blocked = board[+l2][+r2][+c2]!.is_blocked;
        first_tile_copy.special_styles = board[+l2][+r2][+c2]!.special_styles;
      }

      if (!!second_tile_copy) {
        second_tile_copy.coordinates = board[+l1][+r1][+c1]!.coordinates;
        second_tile_copy.unblocks = board[+l1][+r1][+c1]!.unblocks;
        second_tile_copy.is_blocked = board[+l1][+r1][+c1]!.is_blocked;
        second_tile_copy.special_styles = board[+l1][+r1][+c1]!.special_styles;
      }

      board_copy[+l1][+r1][+c1] = second_tile_copy;
      board_copy[+l2][+r2][+c2] = first_tile_copy;

      start += 2;
      end += 2;
    }
  } catch (err) {
    console.log('ERROR', err);
  }

  return board_copy;
};

export const collectUnresolvedTilesCoordinates = (board: Board) => {
  return Object.values(board).reduce((acc: string[], layer: Layer) => {
    Object.values(layer).forEach((row: Row) => {
      Object.values(row).forEach((tile: Tile) => {
        if (!tile) return;

        const { layer, row, col } = tile.coordinates;

        acc.push(`${layer}-${row}-${col}`);
      });
    });

    return shuffleArray(acc);
  }, []);
};
