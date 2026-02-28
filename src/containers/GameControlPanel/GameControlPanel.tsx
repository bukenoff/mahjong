import { type FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import Menu from "~/components/menu/Menu";
import HistoryControls from "~/components/HistoryControls";
import TimerAndMovesCount from "~/components/TimerAndMovesCount";
import TimerControls from "~/components/TimerControls";
import {
  selectIsStepForwardPossible,
  selectIsStepBackPossible,
  selectIsStopped,
  actions,
} from "~/redux";

import * as styles from "./GameControlPanel.styles.module.scss";

export const GameControlPanel: FC = () => {
  const dispatch = useDispatch();
  const is_stopped = useSelector(selectIsStopped);
  const is_step_forward_possible = useSelector(selectIsStepForwardPossible);
  const is_step_back_possible = useSelector(selectIsStepBackPossible);

  function generateNewBoard() {
    dispatch(actions.generateNewBoard());
  }

  function stopTimer() {
    dispatch(actions.stopTimer());
  }

  function resumeTimer() {
    dispatch(actions.resumeTimer());
  }

  function takeStepBack() {
    dispatch(actions.takeStepBack());
  }

  function takeStepForward() {
    dispatch(actions.takeStepForward());
  }

  function shuffleBoard() {
    dispatch(actions.shuffleBoard());
  }

  return (
    <nav className={styles.container}>
      <HistoryControls
        takeStepBack={takeStepBack}
        takeStepForward={takeStepForward}
        is_step_forward_possible={is_step_forward_possible}
        is_step_back_possible={is_step_back_possible}
      />
      <TimerAndMovesCount />
      <div style={{ display: "flex" }}>
        <TimerControls
          stopTimer={stopTimer}
          resumeTimer={resumeTimer}
          is_stopped={is_stopped}
        />
        <Menu generateNewBoard={generateNewBoard} shuffleBoard={shuffleBoard} />
      </div>
    </nav>
  );
};
