import { board_actions } from './board/board.slice'
import { game_actions } from './game/game.slice'
import { selected_tiles_actions } from './selected-tiles/selected-tiles.slice'
import { steps_actions } from './steps/steps.slice'
import { timer_actions } from './timer/timer.slice'

export const actions = {
  ...board_actions,
  ...selected_tiles_actions,
  ...steps_actions,
  ...timer_actions,
  ...game_actions,
}

export * from './timer/timer.selectors'
export * from './steps/steps.selectors'
export * from './selected-tiles/selected-tiles.selectors'
export * from './board/board.selectors'
