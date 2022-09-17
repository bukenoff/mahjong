import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Menu from '~/components/menu/Menu';
import HistoryControls from '~/components/HistoryControls';
import TimerAndMovesCount from '~/components/TimerAndMovesCount';
import useActions from '~/hooks/useActions';
import TimerControls from '~/components/TimerControls';
import {
  selectIsStepForwardPossible,
  selectIsStepBackPossible,
  selectIsStopped,
  actions,
} from '~/redux';
import * as styles from './styles.scss';

export const GameControlPanel: FC = () => {
  const is_stopped = useSelector(selectIsStopped);
  const binded_actions = useActions({
    generateNewBoard: actions.generateNewBoard,
    stopTimer: actions.stopTimer,
    resumeTimer: actions.resumeTimer,
    takeStepBack: actions.takeStepBack,
    takeStepForward: actions.takeStepForward,
    shuffleBoard: actions.shuffleBoard,
  });

  const is_step_forward_possible = useSelector(selectIsStepForwardPossible);
  const is_step_back_possible = useSelector(selectIsStepBackPossible);

  return (
    <nav className={styles.container}>
      <HistoryControls
        takeStepBack={binded_actions.takeStepBack}
        takeStepForward={binded_actions.takeStepForward}
        is_step_forward_possible={is_step_forward_possible}
        is_step_back_possible={is_step_back_possible}
      />
      <TimerAndMovesCount />
      <div style={{ display: 'flex' }}>
        <TimerControls
          stopTimer={binded_actions.stopTimer}
          resumeTimer={binded_actions.resumeTimer}
          is_stopped={is_stopped}
        />
        <Menu
          generateNewBoard={binded_actions.generateNewBoard}
          shuffleBoard={binded_actions.shuffleBoard}
        />
      </div>
    </nav>
  );
};
