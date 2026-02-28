import { type FC, useState, useEffect } from "react";
import * as styles from "./TimerAndMovesCount.styles.module.scss";
import timerService from "~/services/TimerService";

export const TimerAndMovesCount: FC = () => {
  const [time, setTime] = useState(timerService.seconds);

  useEffect(() => {
    timerService.setTime = setTime;

    return () => {
      timerService.setTime = () => {};
    };
  }, [setTime]);

  return (
    <div className={styles.container}>
      <div>Moves left: -</div>
      <div>Time: {time}</div>
    </div>
  );
};
