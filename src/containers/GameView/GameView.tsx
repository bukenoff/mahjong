import React, { FC } from 'react';
import Board from '~/components/Board';
import GameControlPanel from '~/containers/GameControlPanel';
import * as styles from './styles.scss';

const GameView: FC = () => {
  return (
    <div className={styles.container}>
      <GameControlPanel />
      <Board />
    </div>
  );
};

export { GameView };
