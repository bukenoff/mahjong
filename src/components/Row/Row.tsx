import React, { FC, useMemo } from 'react';
import { Row as RowType } from '~/types';
import useActions from '~/hooks/useActions';
import { actions } from '~/redux';
import Tile from '../Tile';

interface Props {
  row: RowType;
}

export const Row: FC<Props> = ({ row }) => {
  const tileList = useMemo(() => {
    return Object.keys(row);
  }, [row]);

  const selectTile = useActions(actions.selectTile, null);

  return (
    <>
      {tileList.map((r, index) => {
        if (!row[+r]) {
          return null;
        }

        return <Tile key={index} tile={row[+r]} selectTile={selectTile} />;
      })}
    </>
  );
};
