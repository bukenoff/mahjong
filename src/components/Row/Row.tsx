import { type FC } from "react";

import type { Row as RowType } from "~/types";
import useActions from "~/hooks/useActions";
import { actions } from "~/redux";

import Tile from "../Tile";

interface Props {
  row: RowType;
}

export const Row: FC<Props> = ({ row }) => {
  const selectTile = useActions(actions.selectTile, null);
  const tileList = Object.keys(row);

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
