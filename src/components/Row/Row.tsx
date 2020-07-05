import React, { FC, useMemo } from 'react';
import Tile from '../Tile';
import { Row } from '~/types';
import useActions from '~/hooks/useActions';
import { selectTile as selectTileActionCreator } from '~/redux/selected-tiles/actions';

interface Props {
  row: Row;
}

const Row: FC<Props> = ({
  row,
}) => {
  const tileList = useMemo(() => {
    return Object.keys(row);
  }, [row]);

  const selectTile = useActions(selectTileActionCreator, null);

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
              selectTile={selectTile}
            />
          );
        })
      }
    </>
  );
};

export { Row };
