import React, { FC } from 'react';
import Board from '~/components/Board';
import * as styles from './styles.scss';

const GameView: FC = () => {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  );
};

export { GameView };
