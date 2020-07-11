import React, { FC } from 'react';
import * as styles from './styles.scss';

const TimerAndMovesCount: FC = () => {
  return (
    <div className={styles.container}>
      <div>Moves left: 19</div>
      <div>00:00</div>
    </div>
  );
};

export { TimerAndMovesCount };
