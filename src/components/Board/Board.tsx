import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import * as styles from './styles.scss';
import Layer from '../Layer';
import { selectBoard } from '~/redux/board/selectors';

const Board: FC = () => {
  const board = useSelector(selectBoard);

  const layers = useMemo(() => {
    if (!board) return;
    return Object.keys(board);
  }, [board]);

  if (!board || !layers) return null;

  return (
    <div className={styles.container}>
      {
        layers.map((layer) => (
          <Layer
            key={layer}
            layer={board[+layer]}
          />
        ))
      }
    </div>
  );
};

export { Board };
