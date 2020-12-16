import { LAYERS_ROWS_SCHEMES, LayersRowsSchemeType } from '~/constants/rows';
import { LAYERS_COUNT, SPECIAL_TILES, SPECIAL_TILES_UNBLOCKS, SPECIAL_TILES_STYLES } from '~/constants/tiles';
import { uuid } from 'uuidv4';
import { Row, Board, Layer, TilesSymbols, TileCoordinates, RowScheme, LayerScheme } from '~/types';
import { shuffleArray, isEmptyObject } from '~/utils';

const getBlockedStatus = (
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col'],
  open_tiles_indexes: number[],
): boolean => {
  if ((layer === 0) && (row === 4)) {
    return true;
  }

  if (layer === 3) {
    return true;
  }

  return !open_tiles_indexes.includes(col);
};

const getSpecialStyles = (
  layer: TileCoordinates['layer'],
  row: TileCoordinates['row'],
  col: TileCoordinates['col'],
) => {
  return SPECIAL_TILES_STYLES[layer][row][col];
};

const hasSpecialStyles = (
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

const getSpecialUnblocks = (
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

const isTileSpecial = (
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
const getUnblocks = (
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

const createRow = (
  row_scheme: RowScheme,
  row_index: number,
  layer_index: number,
  tile_symbols: any,
): Row => {
  const row: Row = {};

  const open_tiles_indexes = [
    Object.values(row_scheme).indexOf(true),
    Object.values(row_scheme).lastIndexOf(true)
  ];

  Object.values(row_scheme).forEach((t, i) => {
    if (!t) {
      return null;
    }

    const tile_is_special = isTileSpecial(layer_index, row_index, i);
    const tile_with_special_styles = hasSpecialStyles(layer_index, row_index, i);
    const [icon] = tile_symbols.splice(tile_symbols.length - 1, 1);

    row[i] = {
      id: uuid(),
      is_blocked: getBlockedStatus(layer_index, row_index, i, open_tiles_indexes),
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

const createLayer = (
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

const createRandomlyOrderedTileSymbols = (): string[] => {
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

const createBoard = (): Board => {
  const board: Board = {};
  const tile_symbols = createRandomlyOrderedTileSymbols();

  [...new Array(LAYERS_COUNT)].forEach((u, i) => {
    board[i] = createLayer(LAYERS_ROWS_SCHEMES[i], i, tile_symbols);
  });

  return board;
};

export {
  createBoard,
  createRandomlyOrderedTileSymbols,
  getUnblocks,
  isTileSpecial,
  getSpecialUnblocks,
};
