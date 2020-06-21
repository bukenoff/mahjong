import React, { FC, useMemo } from 'react';
import * as styles from './styles.scss';
import Tile from '../Tile';

interface Props {
  row: any;
  row_index: number;
}

const Row: FC<Props> = ({
  row,
  row_index,
}) => {
  const tileList = useMemo(() => {
    return Object.keys(row);
  }, [row]);

  return (
    <>
      {
        tileList.map((r, i) => {
          if (!row[r]) {
            return null;
          }

          return (
            <Tile
              key={`${row[r].id}${i}`}
              tile={row[r]}
            />
          );
        })
      }
    </>
  );
};

export { Row };
