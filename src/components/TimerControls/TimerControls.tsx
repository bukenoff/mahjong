import { type FC } from 'react'
import { FiPlay, FiPause } from 'react-icons/fi'

import * as styles from './TimerControls.styles.module.scss'

interface Props {
  is_stopped: boolean
  stopTimer: VoidFunction
  resumeTimer: VoidFunction
}

export const TimerControls: FC<Props> = ({
  is_stopped,
  stopTimer,
  resumeTimer,
}) => {
  function handleTogglePauseClick() {
    if (is_stopped) {
      resumeTimer()
      return
    }

    stopTimer()
  }

  return (
    <button
      aria-label="toggle-pause"
      className={styles.container}
      onClick={handleTogglePauseClick}
      type="button"
      data-testid="timer-controls"
    >
      {is_stopped ? (
        <FiPlay data-testid="fi-play-icon" />
      ) : (
        <FiPause data-testid="fi-pause-icon" />
      )}
    </button>
  )
}
