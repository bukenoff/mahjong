import { type FC } from "react";
import type { Layer as LayerType } from "~/types";
import Row from "../Row";

interface Props {
  layer: LayerType;
}

export const Layer: FC<Props> = ({ layer }) => {
  const rowList = Object.keys(layer);

  return (
    <>
      {rowList.map((r, i) => (
        <Row key={`${r}${i}`} row={layer[+r]} />
      ))}
    </>
  );
};
