import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import * as styles from './styles.scss';
import Menu from '~/components/menu/Menu';
import HistoryControls from '~/components/HistoryControls';
import TimerAndMovesCount from '~/components/TimerAndMovesCount';
import { generateNewBoard } from '~/redux/board/actions';
import useActions from '~/hooks/useActions';
import TimerControls from '~/components/TimerControls';
import { selectIsStopped } from '~/redux/timer/selectors';
import { stopTimer, resumeTimer } from '~/redux/timer/actions';
import { takeStepBack, takeStepForward } from '~/redux/steps/actions';
import { selectStepStack } from '~/redux/steps/selectors';

export const GameControlPanel: FC = () => {
  const is_stopped = useSelector(selectIsStopped);
  const actions = useActions({
    generateNewBoard,
    stopTimer,
    resumeTimer,
    takeStepBack,
    takeStepForward,
  });

  const step_stack = useSelector(selectStepStack);

  return (
    <nav className={styles.container}>
      <HistoryControls
        takeStepBack={actions.takeStepBack}
        takeStepForward={actions.takeStepForward}
        step_stack={step_stack}
      />
      <TimerAndMovesCount />
      <div style={{ display: 'flex' }}>
        <TimerControls
          stopTimer={actions.stopTimer}
          resumeTimer={actions.resumeTimer}
          is_stopped={is_stopped}
        />
        <Menu generateNewBoard={actions.generateNewBoard} />
      </div>
    </nav>
  );
};
