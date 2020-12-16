import React, { FC, useMemo } from 'react';
import Row from '../Row';
import { Layer as LayerType } from '~/types';

interface Props {
  layer: LayerType;
}

export const Layer: FC<Props> = ({ layer }) => {
  const rowList = useMemo(() => {
    return Object.keys(layer);
  }, [layer]);

  return (
    <>
      {rowList.map((r, i) => (
        <Row key={`${r}${i}`} row={layer[+r]} />
      ))}
    </>
  );
};
