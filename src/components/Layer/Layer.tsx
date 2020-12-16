import React, { FC, useMemo } from 'react';
import Row from '../Row';
import { Layer } from '~/types';

interface Props {
  layer: Layer;
}

const Layer: FC<Props> = ({
  layer,
}) => {
  const rowList = useMemo(() => {
    return Object.keys(layer);
  }, [layer]);

  return (
    <>
      {
        rowList.map((r, i) => (
          <Row
            key={`${r}${i}`}
            row={layer[+r]}
          />
        ))
      }
    </>
  );
};

export { Layer };
