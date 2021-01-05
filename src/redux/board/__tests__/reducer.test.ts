import board_reducer from '../reducers';
import {
  tileUpdated,
  multipleTilesUpdated,
  twoTilesRemoved,
  newBoardGenerated,
} from '../actions';
import { Tile, Board } from '../../../types';

describe('Board reducer', () => {
  it('should be defined', () => {
    expect(board_reducer).toBeDefined();
  });

  it('should update tile', () => {
    const initial_state = {
      0: { 1: { 2: { is_selected: false } as Tile } },
    } as Board;

    const result_state = {
      0: { 1: { 2: { is_selected: true } as Tile } },
    } as Board;

    const tile_updated_action = tileUpdated(
      { layer: 0, row: 1, col: 2 },
      { is_selected: true },
    );

    expect(board_reducer(initial_state, tile_updated_action)).toEqual(
      result_state,
    );
  });

  it('should update multiple tiles', () => {
    const initial_state = {
      0: { 1: { 2: { is_selected: false } as Tile } },
      1: { 2: { 4: { is_selected: false } as Tile } },
    } as Board;

    const result_state = {
      0: { 1: { 2: { is_selected: true } as Tile } },
      1: { 2: { 4: { is_selected: true } as Tile } },
    } as Board;

    const multiple_tiles_updated_action = multipleTilesUpdated(
      [
        { layer: 0, row: 1, col: 2 },
        { layer: 1, row: 2, col: 4 },
      ],
      { is_selected: true },
    );

    expect(board_reducer(initial_state, multiple_tiles_updated_action)).toEqual(
      result_state,
    );
  });

  it('should remove two tiles', () => {
    const initial_state = {
      0: { 1: { 2: { is_selected: false } as Tile } },
      1: { 2: { 4: { is_selected: false } as Tile } },
    } as Board;

    const result_state = {
      0: { 1: { 2: null } },
      1: { 2: { 4: null } },
    } as Board;

    const two_tiles_removed_action = twoTilesRemoved([
      { layer: 0, row: 1, col: 2 },
      { layer: 1, row: 2, col: 4 },
    ]);

    expect(board_reducer(initial_state, two_tiles_removed_action)).toEqual(
      result_state,
    );
  });

  it('should update state to new board', () => {
    const initial_state = { board: 'i am board' } as Board;
    const result_state = { board: 'now I am board' } as Board;

    const new_board_action = newBoardGenerated({
      board: 'now I am board',
    } as Board);

    expect(board_reducer(initial_state, new_board_action)).toEqual(
      result_state,
    );
  });
});
