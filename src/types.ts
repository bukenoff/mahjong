export type BoardState = Readonly<Board>;

export type State = Readonly<{
  board: BoardState;
  selected_tiles: SelectedTilesState;
  processing: ProcessingState;
}>

export type ProcessingState = Readonly<boolean>;

export type SelectedTilesState = Readonly<{
  stack: Tile[];
}>

export type SelectedTilesHandler<T = undefined> = (
  state: SelectedTilesState,
  payload: T extends (...args: any[]) => infer R ? R : any,
) => SelectedTilesState

export type BoardHandler<T = undefined> = (
  state: BoardState,
  payload: T extends (...args: any[]) => infer R ? R : any,
) => BoardState

export type ProcessingHandler<T = undefined> = (
  state: ProcessingState,
  payload: T extends (...args: any[]) => infer R ? R : any,
) => ProcessingState

export interface TileCoordinates {
  layer: number;
  row: number;
  col: number;
}

export interface Tile {
  id: string;
  coordinates: TileCoordinates;
  is_blocked: boolean;
  is_selected: boolean;
  icon: TilesSymbols;
  unblocks: TileCoordinates[];
  special_styles: number[] | null;
}

export interface Row {
  [index: number]: Tile;
}

export interface Layer {
  [index: number]: Row;
}

export interface Board {
  [index: number]: Layer;
}

export enum TilesSymbols {
  Gitlab = 'Gitlab',
  Github = 'Github',
  Heart = 'Heart',
  YouTube = 'YouTube',
  Book = 'Book',
  AtSign = 'AtSign',
  Camera = 'Camera',
  Info = 'Info',
  Meh = 'Meh',
  Mic = 'Mic',
  MicOff = 'MicOff',
  Moon = 'Moon',
  Truck = 'Truck',
  User = 'User',
  Watch = 'Watch',
  ZoomIn = 'ZoomIn',
  ZoomOut = 'ZoomOut',
  Sun = 'Sun',
  Sunrise = 'Sunrise',
  Sunset = 'Sunset',
  Share = 'Share',
  Power = 'Power',
  Mail = 'Mail',
  Globe = 'Globe',
  Headphones = 'Headphones',
  Eye = 'Eye',
  EyeOff = 'EyeOff',
  Folder = 'Folder',
  Dollar = 'Dollar',
  Gift = 'Gift',
  Music = 'Music',
  PieChart = 'PieChart',
  Settings = 'Settings',
  Smile = 'Smile',
  ThumbsUp = 'ThumbsUp',
  ThumbsDown = 'ThumbsDown',
}

export enum SelectedTilesActions {
  ADD_TILE_TO_STACK = 'ADD_TILE_TO_STACK',
  REMOVE_TILES_FROM_STACK = 'REMOVE_TILES_FROM_STACK',
  RESOLVE_TILE = 'RESOLVE_TILE',
  SELECT_TILE = 'SELECT_TILE',
}

export enum BoardActions {
  UPDATE_TILE = 'UPDATE_TILE',
  REMOVE_TILE = 'REMOVE_TILE',
}

export enum ProcessingActions {
  TOGGLE_PROCESSING = 'TOGGLE_PROCESSING',
}

export type TileUpdate = Partial<
  Pick<Tile, 'is_selected' | 'is_blocked'>
>;
