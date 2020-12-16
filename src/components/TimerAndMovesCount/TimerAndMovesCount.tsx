import React, { FC, useState, useEffect } from 'react';
import * as styles from './styles.scss';
import timerService from '~/services/TimerService';

export const TimerAndMovesCount: FC = () => {
  const [time, setTime] = useState(timerService.seconds);

  useEffect(() => {
    timerService.setTime = setTime;

    return () => {
      timerService.setTime = (arg) => {};
    };
  }, [setTime]);

  return (
    <div className={styles.container}>
      <div>Moves left: 19</div>
      <div>Time: {time}</div>
    </div>
  );
};
