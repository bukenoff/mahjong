import { CSSProperties } from 'react';

export type BoardState = Board | null;

export interface State {
  board: BoardState;
  selected_tiles: SelectedTilesState;
  processing: ProcessingState;
  timer: any; // any for now, since I don't have any solid implementation ideas
  steps: StepsState;
  tile_pairs_resolved_count: TilePairsResolvedCountState;
}

export type TilePairsResolvedCountState = number;

export interface TimerState {
  is_stopped: boolean;
  stopped_at: number | null;
}

export interface StepsState {
  step_index: number;
  steps_stack: [Tile, Tile][];
  steps_made: number;
}

export type ProcessingState = boolean;

export interface SelectedTilesState {
  stack: Tile[];
}

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
  unblocks: TileCoordinates[] | null;
  special_styles: CSSProperties | null;
}

export interface Row {
  [index: number]: Tile | null;
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
  TILE_ADDED_TO_STACK = 'TILE_ADDED_TO_STACK',
  STACK_CLEARED = 'STACK_CLEARED',
  SELECT_TILE = 'SELECT_TILE',
}

export enum BoardActions {
  TILE_UPDATED = 'TILE_UPDATED',
  MULTIPLE_TILES_UPDATED = 'MULTIPLE_TILES_UPDATED',
  TWO_TILES_REMOVED = 'TWO_TILES_REMOVED',
  GENERATE_NEW_BOARD = 'GENERATE_NEW_BOARD',
  NEW_BOARD_GENERATED = 'NEW_BOARD_GENERATED',
  MULTIPLE_TILES_RESTORED = 'MULTIPLE_TILES_RESTORED',
}

export enum ProcessingActions {
  PROCESSING_TOGGLED = 'PROCESSING_TOGGLED',
}

export enum TimerActions {
  STOP_TIMER = 'STOP_TIMER',
  TIMER_STOPPED = 'TIMER_STOPPED',
  RESUME_TIMER = 'RESUME_TIMER',
  TIMER_RESUMED = 'TIMER_RESUMED',
  RESET_TIMER = 'RESET_TIMER',
  TIMER_RESET = 'TIMER_RESET',
}

export enum StepsActions {
  TAKE_STEP_BACK = 'TAKE_STEP_BACK',
  STEP_BACK_TAKEN = 'STEP_BACK_TAKEN',
  TAKE_STEP_FORWARD = 'TAKE_STEP_FORWARD',
  STEP_FORWARD_TAKEN = 'STEP_FORWARD_TAKEN',
  STEP_INDEX_INCREMENTED = 'STEP_INDEX_INCREMENTED',
  STEP_INDEX_DECREMENTED = 'STEP_INDEX_DECREMENTED',
  STEP_ADDED_TO_STACK = 'STEP_ADDED_TO_STACK',
  STEPS_MADE_INCREMENTED = 'STEPS_MADE_INCREMENTED',
}

export type TileUpdate = Partial<Pick<Tile, 'is_selected' | 'is_blocked'>>;

export type TileCoordinatesPair = [Tile['coordinates'], Tile['coordinates']];

export interface RowScheme {
  [index: number]: boolean;
}

export interface LayerScheme {
  [index: number]: boolean;
}

export interface BoardScheme {
  layer_scheme: LayerScheme;
}
