import { render } from "@testing-library/react";

import { Tile } from "./Tile";

import { TilesSymbols, type Tile as TileType } from "../../types";

test("renders without crash", () => {
  const { getByTestId } = render(
    <Tile
      tile={{
        id: "string",
        coordinates: {
          layer: 1,
          row: 1,
          col: 1,
        },
        is_blocked: false,
        is_selected: false,
        icon: TilesSymbols.AtSign,
        unblocks: [
          {
            layer: 1,
            row: 1,
            col: 2,
          },
        ],
        special_styles: null,
      }}
      selectTile={jest.fn as (tile: TileType) => void}
    />
  );
  const tileElement = getByTestId("tile");
  expect(tileElement).toBeInTheDocument();
});
