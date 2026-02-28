import React, { type FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "~/components/Board";
import GameControlPanel from "~/containers/GameControlPanel";
import { actions, selectIsStopped } from "~/redux";
import * as styles from "./GameView.styles.module.scss";

export const GameView: FC = () => {
  const is_stopped = useSelector(selectIsStopped);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.generateNewBoard());
    dispatch(actions.gameStarted("johny"));
  }, []);

  return (
    <div className={styles.container}>
      <GameControlPanel />
      {!is_stopped && <Board />}
    </div>
  );
};
