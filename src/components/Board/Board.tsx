import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectBoard } from "~/redux";
import Layer from "../Layer";
import * as styles from "./Board.styles.module.scss";

export const Board: FC = () => {
  const board = useSelector(selectBoard);

  const layers = useMemo(() => {
    if (!board) return;
    return Object.keys(board);
  }, [board]);

  if (!board || !layers) return null;

  return (
    <div className={styles.container}>
      {layers.map((layer) => (
        <Layer key={layer} layer={board[+layer]} />
      ))}
    </div>
  );
};
