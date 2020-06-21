import React, { FC, useMemo } from 'react';
import * as styles from './styles.scss';
import Row from '../Row';

interface Props {
  layer: any;
  index: number;
}

const Layer: FC<Props> = ({
  layer,
  index,
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
            row={layer[r]}
            row_index={i}
          />
        ))
      }
    </>
  );
};

export { Layer };
