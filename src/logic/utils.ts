import { type TilesSymbolsValue, type TileCoordinates } from "~/types";
import { ICONS_MAP } from "../constants/iconsMap";
import type { IconType } from "react-icons/lib";

export const shuffleArray = <T>(array: T[]): T[] => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const isEmptyObject = (
  object: Record<string | number, unknown>
): boolean => {
  return Object.keys(object).length === 0 && object.constructor === Object;
};

export const renderIcon = (icon: TilesSymbolsValue): IconType | "no-icon" => {
  return ICONS_MAP[icon] || "no-icon";
};

export const getTileBackground = (layer: TileCoordinates["layer"]): string => {
  if (layer === 0) {
    return "#FCFCFC";
  }

  if (layer === 1) {
    return "#EEF0F1";
  }

  if (layer === 2) {
    return "#DFE3E5";
  }

  if (layer === 3) {
    return "#D1D7DA";
  }

  return "#C2CACE";
};
