import React, { FC, useCallback } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';
import { stopTimer as stopTimerAction , resumeTimer as resumeTimerAction } from '~/redux/timer/actions';
import * as styles from './styles.scss';

interface Props {
  is_stopped: boolean;
  stopTimer: typeof stopTimerAction;
  resumeTimer: typeof resumeTimerAction;
}

const TimerControls: FC<Props> = ({
  is_stopped,
  stopTimer,
  resumeTimer,
}) => {
  const handleTogglePauseClick = useCallback(() => {
    if (is_stopped) {
      resumeTimer();
      return null;
    }

    stopTimer();
  }, [is_stopped, resumeTimer, stopTimer]);

  return (
    <button
      className={styles.container}
      onClick={handleTogglePauseClick}
      type="button"
      data-testid="timer-controls"
    >
      {
        is_stopped
          ? (
            <FiPlay
              data-testid="fi-play-icon"
            />)
          : (
            <FiPause
              data-testid="fi-pause-icon"
            />
          )
      }
    </button>
  );
};

export { TimerControls };
