import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Board from '~/components/Board';
import GameControlPanel from '~/containers/GameControlPanel';
import * as styles from './styles.scss';
import { selectIsStopped } from '~/redux/timer/timer.selectors';

export const GameView: FC = () => {
  const is_stopped = useSelector(selectIsStopped);

  return (
    <div className={styles.container}>
      <GameControlPanel />
      {!is_stopped && <Board />}
    </div>
  );
};
