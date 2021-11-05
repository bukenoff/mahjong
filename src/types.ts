import { CSSProperties } from 'react';

export type BoardState = Board | null;

export interface State {
  board: BoardState;
  selected_tiles: SelectedTilesState;
  processing: ProcessingState;
  timer: any; // any for now, since I don't have any solid implementation ideas
  steps: StepsState;
  tile_pairs_resolved_count: TilePairsResolvedCountState;
  scores: ScoresState;
}

export type TilePairsResolvedCountState = number;

export interface TimerState {
  is_stopped: boolean;
  stopped_at: number | null;
}

export interface Player {
  name: string;
  time: number;
}

export interface ScoresState {
  players: Player[];
  currentPlayerScore: number;
}

export interface GameState {
  is_over: boolean;
  player_name: string;
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
