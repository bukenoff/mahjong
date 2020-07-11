import React, { FC } from 'react';
import * as styles from './styles.scss';
import Menu from '~/components/Menu';
import HistoryControls from '~/components/HistoryControls';
import TimerAndMovesCount from '~/components/TimerAndMovesCount';

const GameControlPanel: FC = () => {
  return (
    <nav className={styles.container}>
      <HistoryControls />
      <TimerAndMovesCount />
      <Menu />
    </nav>
  );
};

export { GameControlPanel };
