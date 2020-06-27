import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import * as styles from './styles.scss';
import Layer from '../Layer';
import { selectBoard } from '~/redux/board/selectors';

const Board: FC = () => {
  const board = useSelector(selectBoard);

  const layers = useMemo(() => {
    return Object.keys(board);
  }, [board]);

  return (
    <div className={styles.container}>
      {
        layers.map((l, i) => (
          <Layer
            key={l}
            layer={board[l]}
          />
        ))
      }
    </div>
  );
};

export { Board };
