import { type FC } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import * as styles from './HistoryControl.styles.module.scss'

interface Props {
  is_step_forward_possible: boolean
  is_step_back_possible: boolean
  takeStepBack: VoidFunction
  takeStepForward: VoidFunction
}

export const HistoryControls: FC<Props> = ({
  is_step_forward_possible,
  is_step_back_possible,
  takeStepBack,
  takeStepForward,
}) => {
  return (
    <div className={styles.container} data-testid="history_controls_root">
      <button
        aria-label="navigate-history-back"
        className={styles.history_navigate_button}
        type="button"
        disabled={!is_step_back_possible}
        onClick={takeStepBack}
        data-testid="step_back_button"
      >
        <FiArrowLeft />
      </button>
      <button
        aria-label="navigate-history-forward"
        className={styles.history_navigate_button}
        type="button"
        disabled={!is_step_forward_possible}
        onClick={takeStepForward}
        data-testid="step_forward_button"
      >
        <FiArrowRight />
      </button>
    </div>
  )
}
