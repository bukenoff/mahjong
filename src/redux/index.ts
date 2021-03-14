import { board_actions } from './board/slice';
import { processing_actions } from './processing/slice';
import { scores_actions } from './scores/slice';
import { selected_tiles_actions } from './selected-tiles/slice';
import { steps_actions } from './steps/slice';
import { timer_actions } from './timer/slice';

export const actions = {
  ...board_actions,
  ...processing_actions,
  ...scores_actions,
  ...selected_tiles_actions,
  ...steps_actions,
  ...timer_actions,
};
