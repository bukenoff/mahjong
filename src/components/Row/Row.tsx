import React, { FC, useMemo, memo } from 'react';
import Tile from '../Tile';
import { Row } from '~/types';

interface Props {
  row: Row;
}

const Row: FC<Props> = ({
  row,
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
